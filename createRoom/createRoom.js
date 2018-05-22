var room;

$(document).ready(function() {
  $("#createRoom").on("click", function() {
    var name = $("#roomName").val();
    var icon = $('input[name="icon"]:checked').val();
    var meta = "{ icon: " + icon + " }";
    room = new api.model.room(null, name, meta);
    api.room.add(room)
      .done((data, textStatus, jqXHR) => {
        room.id = data.room.id;
        window.location.href = "../rooms.html";
      })
      .fail((jqXHR, textStatus, errorThrown) => {
        console.log(jqXHR.responseText);
      })
  });

});
