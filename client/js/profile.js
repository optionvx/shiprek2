Template.profile.rendered = function () {
  $("#profile-link").addClass('selected');
  $("#database-link").removeClass('selected');
  $("#collaborate-link").removeClass('selected');
  $("#search-link").removeClass('selected');
  $("#login-link").removeClass('selected');
  $("#questions-link").removeClass('selected');
}
Template.profile.helpers({
  email: function() {
    if(!Meteor.user()) {
      Bert.alert("You are not logged in, permission denied", "danger", "growl-top-right");
      return false;
    } else {
      return Meteor.user().emails[0].address;
    }

  },
  username: function() {
    if(!Meteor.user()) {
      Bert.alert("You are not logged in, permission denied", "danger", "growl-top-right");
      return false;
    } else {
      return Meteor.user().username;
    }
    },
    //End function

  //To display users DeadeyeDatabase data. Eventually, import and export functions should
  //Probably go into here?
  //Purpose is to find all data that belongs to the user
  //If we want to restrict users we can restrict data etc

  userdatabase: function() {
    var username = Meteor.user().username;
    var userId = Meteor.userId();
    var userdatabase = DeadeyeDatabase.find({userId: userId}, {sort: {createdAt: -1}});
    return userdatabase;

  },

  UserImages: function() {
    var username = Meteor.user().username;
    var userId = Meteor.userId();
    var URL = UserImages.findOne({username: username}, {userId: userId});
    return URL;
  }
});

Template.profile.events({
"submit .edit-profile": function(event) {
  var file = $('#profileImage').get(0).files[0];

  if (file) {
    fsFile = new FS.File(file);

    ProfileImages.insert(fsFile, function(err, result){
      if (err) {
        throw new Meteor.Error(err);
      } else {
        var imageLoc = '/cfs/files/ProfileImages/'+result._id;

        UserImages.insert({
          userId: Meteor.userId(),
          username: Meteor.user().username,
          image: imageLoc,

        });

        Bert.alert("Profile Update Successful!", "success", "growl-top-right");
      }
    });
  }
  return false //Prevent Submit
}

});
