var device;

var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
var queries = queryString.split("=");

$(document).ready(function() {
  api.room.getAll()
    .done(function(data, textStatus, jqXHR) {
      data.rooms.forEach(function(room){
        var name = room.name;
        var icon = room.meta.icon;
        var id = room.id;
        VueInstance.addDevice(name, "", icon, id);
      })
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
      console.log(jqXHR.responseText);
    })

  $(".instances").on("click", "button", function() {
    var id = $(this).attr('id');
      api.device.addDeviceToRoom(queries[1], id)
        .done(function(data, textStatus, jqXHR) {
          api.device.get(queries[1])
            .done(function(data, textStatus, jqXHR) {
              device = data.device;
              var queryString = "?id=" + device.id;
              if(device.typeId === acId) {
                window.location.href = "../devices/ac/ac.html" + queryString;
              } else if(device.typeId === blindId) {
                window.location.href = "../devices/blinds/blinds.html" + queryString;
              } else if(device.typeId === doorId) {
                window.location.href = "../devices/door/door.html" + queryString;
              } else if(device.typeId === lampId) {
                window.location.href = "../devices/lamp/lamp.html" + queryString;
              } else if (device.typeId === ovenId) {
                window.location.href = "../devices/oven/oven.html" + queryString;
              } else if (device.typeId === refriId) {
                window.location.href = "../devices/refrigerator/refrigerator.html" + queryString;
              }
            })
            .fail(function(jqXHR, textStatus, errorThrown) {
              console.log(jqXHR.responseText);
            });
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
          console.log(jqXHR.responseText);
        });
  });
});
