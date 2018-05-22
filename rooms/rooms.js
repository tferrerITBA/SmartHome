$(document).ready(function() {
  api.room.getAll()
    .done(function(data, textStatus, jqXHR) {
      data.rooms.forEach(function(room){
        api.room.getDevices(room.id)
          .done(function(data, textStatus, jqXHR) {
            var name = room.name;
            var icon = room.meta.split(" ")[2];
            var id = room.id;
            VueInstance.addItem(name, "DEVICES: " + data.devices.length , icon, id);
          })
          .fail(function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR.responseText);
          })
      })
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
      console.log(jqXHR.responseText);
    })

  $(".instances").on("click", "button", function() {
    var id = $(this).attr('id');
    var queryString = "?id=" + id;
    window.location.href = "rooms/room/room.html" + queryString;
  });
});
