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

  // $("#put").on("click", function() {
  //   // get icon
  //   var icon;
  //   var name;
  //   room.name = name;
  //   room.meta = "{ icon: " + icon + " }";
  //   api.room.modify(room)
  //     .done((data, textStatus, jqXHR) => {
  //       // devolverlo a la room cambiada.
  //     })
  //     .fail((jqXHR, textStatus, errorThrown) => {
  //       console.log(jqXHR.responseText);
  //     })
  // });
  //
  // $("#delete").on("click", function() {
  //   api.room.delete(room.id)
  //     .done((data, textStatus, jqXHR) => {
  //       console.log(data);
  //     })
  //     .fail((jqXHR, textStatus, errorThrown) => {
  //       console.log(jqXHR.responseText);
  //     })
  // });

});
