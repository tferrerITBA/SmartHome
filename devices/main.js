var device;
var acId = "li6cbv5sdlatti0j";
var blindId = "eu0v2xgprrhhg41g";
var lampId = "go46xmbqeomjrsjr";
var ovenId = "im77xxyulpegfmv8";
var doorId = "lsf78ly0eqrjbz91";
var refriId = "rnizejqr2di0okho";

$(document).ready(function() {
  if(document.location.href.match(/[^\/]+$/)[0] === "devices.html") {
  api.device.getAll()
    .done(function(data, textStatus, jqXHR) {
      data.devices.forEach(function(device){
        console.log(device);
        var name = device.name;
        var typeId = device.typeId;
        var id = device.id;
        if(typeId === acId) {
          VueInstance.addItem(name, "AIR CONDITIONER", "assets/ACIcon.png", id);
        } else if(typeId === blindId) {
          VueInstance.addItem(name, "BLINDS", "assets/BlindsIcon.png", id);
        } else if(typeId === doorId) {
          VueInstance.addItem(name, "DOOR", "assets/DoorIcon.png", id);
        } else if(typeId === lampId) {
          VueInstance.addItem(name, "LAMP", "assets/LampIcon.png", id);
        } else if(typeId === ovenId) {
          VueInstance.addItem(name, "OVEN", "assets/OvenIcon.png", id);
        }  else if(typeId === refriId) {
          VueInstance.addItem(name, "REFRIGERATOR", "assets/RefrigeratorIcon.png", id);
        }
      })
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
      console.log(jqXHR.responseText);
    })
  }

  $(".instances").on("click", "button", function() {
    api.device.get($(this).attr('id'))
      .done(function(data, textStatus, jqXHR) {
        device = data.device;
        var queryString = "?id=" + device.id;
        if(device.typeId === acId) {
          window.location.href = "devices/ac/ac.html" + queryString;
        } else if(device.typeId === blindId) {
          window.location.href = "devices/blinds/blinds.html" + queryString;
        } else if(device.typeId === doorId) {
          window.location.href = "devices/door/door.html" + queryString;
        } else if(device.typeId === lampId) {
          window.location.href = "devices/lamp/lamp.html" + queryString;
        } else if (device.typeId === ovenId) {
          window.location.href = "devices/oven/oven.html" + queryString;
        } else if (device.typeId === refriId) {
          window.location.href = "devices/refrigerator/refrigerator.html" + queryString;
        }
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR.responseText);
      });
  });

  $("#favorite").on("click", function() {
    var fav = device.meta.split("favorite: ")[1].split(" }")[0];
    var hasRoom = device.meta.split("hasRoom: ")[1].split(",")[0];
    if(fav === "false") {
      device.meta = "{ hasRoom: " + hasRoom + ", favorite: " + true + " }";
    } else {
      device.meta = "{ hasRoom: " + hasRoom + ", favorite: " + false + " }";
    }
    api.device.modify(device, device.id)
      .done(function(data, textStatus, jqXHR) {
        if(fav === "false") {
          $("#favorite").children().css("background-color", "#FEA500");
        } else {
          $("#favorite").children().css("background-color", "white");
        }
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR.responseText);
      })
  });

  $("#editDevice").on("click", function() {
    var queryString = "?id=" + device.id;
    window.location.href = "../modifyDevice.html" + queryString;
  });

  $("#selectRoom").on("click", function() {
    var queryString = "?id=" + device.id;
    window.location.href = "../../roomForDevice/roomForDevice.html" + queryString;
  });

  $("#deselectRoom").on("click", function() {
    api.device.deleteDeviceFromRoom(device.id)
      .done(function(data, textStatus, jqXHR) {
        var fav = device.meta.split("favorite: ")[1].split(" }")[0];
        device.meta = "{ hasRoom: false, favorite: " + fav + " }";
        api.device.modify(device, device.id)
          .done(function(data, textStatus, jqXHR) {
            $("#selectRoom").prop("disabled", false);
            $("#deselectRoom").prop("disabled", true);
            window.location.reload();
          })
          .fail(function(jqXHR, textStatus, errorThrown) {
              console.log(jqXHR.responseText);
          })
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR.responseText);
      });
  });

});
