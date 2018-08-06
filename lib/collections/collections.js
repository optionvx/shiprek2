//Mongo DB Database Collections
DeadeyeDatabase = new Mongo.Collection('DeadeyeDatabase');

//ProfileImages Collections

ProfileImages = new FS.Collection("ProfileImages", {
  stores: [new FS.Store.GridFS("profileImages")]
});

ProfileImages.allow ({
  insert: function(userId, doc){
    return true;
  },
  update: function(userId, doc, fields, modifier){
    return true;
  },
  download: function(){
    return true;
  }
});
//To STORE urls for images for rendering to browser

UserImages = new Mongo.Collection("UserImages")

UserImages.allow({
  insert: function(){
    return true;
  },
  update: function(userId, doc, fields, modifier){
    return true;
  }
});
