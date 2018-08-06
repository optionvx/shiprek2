//To tell meteor that this code needs to be running on the
//server

if (Meteor.isServer){
  Meteor.methods({
    //Method for Adding Data
    addDeadeyeDatabase: function(dwoodspec,Dshape, shipType, shipYear, Tonnage, Ddiameter, Dlength, Dthickness, Dwidth) {
      if(!Meteor.userId()) {
        throw new Meteor.Error('not authorized');
        return false;
      } else {
        var username = Meteor.user().username;
        var year = new Date().getFullYear();
        var month = new Date().getMonth() + 1;
        var day = new Date().getDate();
        var date = (month + "/" + day + "/" + year).toString();
        var fs = Npm.require('fs');
// Assume that the csv file is in yourApp/public/data folder


        DeadeyeDatabase.insert({
          dwoodspec: dwoodspec,
          Dshape: Dshape,
          shipType: shipType,
          shipYear: shipYear,
          Tonnage: Tonnage,
          Ddiameter: Ddiameter,
          Dlength: Dlength,
          Dthickness: Dthickness,
          Dwidth: Dwidth,
          author: username,
          date: date,
          createdAt: new Date(),
          userId: Meteor.userId(),
        });
        }

    },
});

}
