var room;

$(document).ready(function() {
  var queryString = decodeURIComponent(window.location.search);
  queryString = queryString.substring(1);
  var queries = queryString.split("=");

  api.room.get(queries[1])
    .done(function(data, textStatus, jqXHR) {
      room = data.room;
      icon = "../../" + room.meta.split(" ")[2];
      $(".title-text").text(room.name);
      $("#roomIcon").attr("src", icon);
      document.title = room.name + " - Smart Home";
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
      console.log(jqXHR.responseText);
    });

  $("#editRoom").on("click", function() {
    var queryString = "?id=" + room.id;
    window.location.href = "../modifyRoom.html" + queryString;
  });

});
