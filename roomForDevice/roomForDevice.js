var device;
var acId = "li6cbv5sdlatti0j";
var blindId = "eu0v2xgprrhhg41g";
var lampId = "go46xmbqeomjrsjr";
var ovenId = "im77xxyulpegfmv8";
var doorId = "lsf78ly0eqrjbz91";
var refriId = "rnizejqr2di0okho";

$(document).ready(function() {

  var queryString = decodeURIComponent(window.location.search);
  queryString = queryString.substring(1);
  var queries = queryString.split("=");

  api.room.getAll()
    .done(function(data, textStatus, jqXHR) {
      data.rooms.forEach(function(room){
        api.room.getDevices(room.id)
          .done(function(data, textStatus, jqXHR) {
            var name = room.name;
            var icon = "../" + room.meta.split(" ")[2];
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
      api.device.addDeviceToRoom(queries[1], id)
        .done(function(data, textStatus, jqXHR) {          
          api.device.get(queries[1])
            .done(function(data, textStatus, jqXHR) {
              device = data.device;
              device.meta = "{ hasRoom: true }";
              api.device.modify(device, device.id)
                .done(function(data, textStatus, jqXHR) {
                  queryString = "?id=" + device.id;
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
                })
            })
            .fail(function(jqXHR, textStatus, errorThrown) {
              console.log(jqXHR.responseText);
            });
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
          console.log(jqXHR.responseText);
        });
  });

  $("#cancel").on("click", function() {
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
  });

});
