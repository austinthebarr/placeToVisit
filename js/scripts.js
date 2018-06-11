// buisness logic

function Place(place, city, time, landmark, see){
  this.place = place;
  this.city = city;
  this.time = time;
  this.landmark = landmark;
  this.see = see;
}

Place.protoype.timePlace = function() {
  return this.place + " " + this.time;
};

//user interface logic
$(function(){
  $("form#")
}
