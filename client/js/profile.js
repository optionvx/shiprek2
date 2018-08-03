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
  }
});
