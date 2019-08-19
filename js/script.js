$(document).ready(function() {
  $("form").submit(function(event) {

    $(".display ul").text("");

    var favorites = [
      $("#shape").val(),
      $("#colour").val(),
      $("#water").val(),
      $("#landmass").val(),
      $("#dinosaur").val()
    ];
    favorites.forEach(function(favItem) {
      $(".display ul").append("<li>"+favItem+"</li>");
    });

    var truncate = [];
    truncate.push(favorites[0], favorites[2]);

    truncate.forEach(function(favItem) {
      $(".display2 ul").append("<li>"+favItem+"</li>");
    });

    event.preventDefault();
  });
});
