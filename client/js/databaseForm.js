Template.databaseForm.rendered = function () {

}

//Grabbing data from databaseForm

Template.databaseForm.events({
  "submit .data-post": function() {
    var dwoodspec = event.target.dwoodspec.value;
    var Dshape = event.target.Dshape.value;
    var shipType = event.target.shipType.value;
    var shipYear = event.target.shipYear.value;
    var Tonnage = event.target.Tonnage.value;
    var Ddiameter = event.target.Ddiameter.value;
    var Dlength = event.target.Dlength.value;
    var Dthickness = event.target.Dthickness.value;
    var Dwidth = event.target.Dwidth.value;

    if (isNotEmpty(dwoodspec) &&
     isNotEmpty(Dshape) &&
     isNotEmpty(shipType) &&
     isNotEmpty(shipYear) &&
     isNotEmpty(Tonnage) &&
     isNotEmpty(Ddiameter) &&
     isNotEmpty(Dlength)&&
     isNotEmpty(Dthickness) &&
     isNotEmpty(Dwidth)) {

       //Server-side method usering meteor.call

Meteor.call('addDeadeyeDatabase', dwoodspec, Dshape, shipType, shipYear, Tonnage, Ddiameter, Dlength, Dthickness, Dwidth);
//For resetting form
event.target.dwoodspec.value = "";
event.target.Dshape.value = "";
event.target.shipType.value = "";
event.target.shipYear.value = "";
event.target.Tonnage.value = "";
event.target.Ddiameter.value = "";
event.target.Dlength.value = "";
event.target.Dthickness.value = ""
event.target.Dwidth.value = "";

Bert.alert("Your Data Has Posted!", "success", "growl-top-right");


     } else {
       Bert.alert("something went wrong", "danger", "growl-top-right");
     }

     return false; // prevent submit

    }

});

//Validation Rules

var isNotEmpty = function(value){
  if (value && value !== ''){
    return true;
  }
  Bert.alert("Please fill in all fields", "danger", "growl-top-right");
  return false;
};
