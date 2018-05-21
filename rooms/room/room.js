$(document).ready(function() {
  api.room.getDevices(room.id)
      .done((data, textStatus, jqXHR) => {
        data.devices.forEach(function(device){
          // show device with component
        })
      })
      .fail((jqXHR, textStatus, errorThrown) => {
        console.log(jqXHR.responseText);
      })

  $("#put").on("click", function() {
    // get icon
    var icon;
    var name;
    room.name = name;
    room.meta = "{ icon: " + icon + " }";
    api.room.modify(room)
      .done((data, textStatus, jqXHR) => {
        // devolverlo a la room cambiada.
      })
      .fail((jqXHR, textStatus, errorThrown) => {
        console.log(jqXHR.responseText);
      })
  });

  $("#delete").on("click", function() {
    api.room.delete(room.id)
      .done((data, textStatus, jqXHR) => {
        console.log(data);
      })
      .fail((jqXHR, textStatus, errorThrown) => {
        console.log(jqXHR.responseText);
      })
  });

});
