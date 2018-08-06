//Subscriptions
if (Meteor.isClient) {
  Meteor.subscribe('DeadeyeDatabase')
  Meteor.subscribe('Users');
  Meteor.subscribe('ProfileImages');
  Meteor.subscribe('UserImages');
}
