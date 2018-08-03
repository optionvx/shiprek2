Template.database.rendered = function () {
  $("#database-link").addClass('selected');
  $("#collaborate-link").removeClass('selected');
  $("#profile-link").removeClass('selected');
  $("#search-link").removeClass('selected');
  $("#login-link").removeClass('selected');
  $("#questions-link").removeClass('selected');
}

//Go to my collection Data
Template.database.helpers({
  database: function() {
    var database = DeadeyeDatabase.find({}, {sort: {createdAt: -1}});
    return database;
  }
});
