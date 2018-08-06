//Publications

//If not logged in do not return true and do not publish database
if(Meteor.isServer) {
  Meteor.publish('DeadeyeDatabase', function () {
    if(!this.userId){
      return false;
      throw new Meteor.Error('not authorized');
    } else {
      return DeadeyeDatabase.find();
    }

    
  });
}
