var room;
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

  api.room.get(queries[1])
    .done(function(data, textStatus, jqXHR) {
      room = data.room;
      icon = "../../" + room.meta.split(" ")[2];
      $(".title-text").text(room.name);
      $("#roomIcon").attr("src", icon);
      document.title = room.name + " - Smart Home";
      api.room.getDevices(room.id)
        .done(function(data, textStatus, jqXHR) {
          data.devices.forEach(function(device){
            var name = device.name;
            var typeId = device.typeId;
            var id = device.id;
            if(typeId === acId) {
              VueInstance.addItem(name, "AIR CONDITIONER", "../../assets/ACIcon.png", id);
            } else if(typeId === blindId) {
              VueInstance.addItem(name, "BLINDS", "../../assets/BlindsIcon.png", id);
            } else if(typeId === doorId) {
              VueInstance.addItem(name, "DOOR", "../../assets/DoorIcon.png", id);
            } else if(typeId === lampId) {
              VueInstance.addItem(name, "LAMP", "../../assets/LampIcon.png", id);
            } else if(typeId === ovenId) {
              VueInstance.addItem(name, "OVEN", "../../assets/OvenIcon.png", id);
            }  else if(typeId === refriId) {
              VueInstance.addItem(name, "REFRIGERATOR", "../../assets/RefrigeratorIcon.png", id);
            }
          })
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
          console.log(jqXHR.responseText);
        });
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
      console.log(jqXHR.responseText);
    });

  $(".instances").on("click", "button", function() {
    var id = $(this).attr('id');
      api.device.get($(this).attr('id'))
      .done(function(data, textStatus, jqXHR) {
        device = data.device;
        queryString = "?id=" + device.id;
        if(device.typeId === acId) {
          window.location.href = "../../devices/ac/ac.html" + queryString;
        } else if(device.typeId === blindId) {
          window.location.href = "../../devices/blinds/blinds.html" + queryString;
        } else if(device.typeId === doorId) {
          window.location.href = "../../devices/door/door.html" + queryString;
        } else if(device.typeId === lampId) {
          window.location.href = "../../devices/lamp/lamp.html" + queryString;
        } else if (device.typeId === ovenId) {
          window.location.href = "../../devices/oven/oven.html" + queryString;
        } else if (device.typeId === refriId) {
          window.location.href = "../../devices/refrigerator/refrigerator.html" + queryString;
        }
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR.responseText);
      });
  });

  $("#editRoom").on("click", function() {
    var queryString = "?id=" + room.id;
    window.location.href = "../modifyRoom.html" + queryString;
  });

});
