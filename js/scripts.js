// buisness logic

function Place(place, city, time, landmark, see){
  this.place = place;
  this.city = city;
  this.time = time;
  this.landmark = landmark;
  this.see = see;
}

Place.prototype.timePlace = function() {
  return this.place + " " + this.time;
};

//user interface logic
$(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();

    var inputtedPlace = $("input#new-place").val();
    var inputtedCity = $("input#new-city").val();
    var inputtedTime = $("input#new-time").val();
    var inputtedLandmark = $("input#new-landmark").val();
    var inputtedSee = $("input#new-mustSee").val();

    var newPlace = new Place(inputtedPlace, inputtedCity, inputtedTime, inputtedLandmark, inputtedSee);

    $("ul#places").append("<li><span class ='places'>" + newPlace.timePlace() +"</span></li>");

    $("input#new-place").val("");
    $("input#new-city").val("");
    $("input#new-time").val("");
    $("input#new-landmark").val("");
    $("input#new-mustSee").val("");

    $(".places").last().click(function(){
      $("#show-places").show();
      $("#show-places h2").text(newPlace.place);
      $(".city").text(newPlace.city);
      $(".time").text(newPlace.time);
      $(".landmark").text(newPlace.landmark);
      $(".mustSee").text(newPlace.see);
    });
  });
});
