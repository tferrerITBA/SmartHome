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
        var name = device.name;
        var typeId = device.typeId;
        var id = device.id;
        if(typeId === acId) {
          VueInstance.addDevice(name, "AIR CONDITIONER", "assets/ACIcon.png", id);
        } else if(typeId === blindId) {
          VueInstance.addDevice(name, "BLINDS", "assets/BlindsIcon.png", id);
        } else if(typeId === doorId) {
          VueInstance.addDevice(name, "DOOR", "assets/DoorIcon.png", id);
        } else if(typeId === lampId) {
          VueInstance.addDevice(name, "LAMP", "assets/LampIcon.png", id);
        } else if(typeId === ovenId) {
          VueInstance.addDevice(name, "OVEN", "assets/OvenIcon.png", id);
        }  else if(typeId === refriId) {
          VueInstance.addDevice(name, "REFRIGERATOR", "assets/RefrigeratorIcon.png", id);
        }
      })
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
      console.log(jqXHR.responseText);
    })
  }
  
    $(".instances").on("click", "button", function() {
      console.log($(this).attr('id'));
      var id = $(this).attr('id');
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

  // $("#modifyDevice").on("click", function() {
  //   var name = $("#name").val();;
  //   if (name !== "") {
  //     device.name = name;
  //     api.device.modify(device)
  //     .done((data, textStatus, jqXHR) => {
  //       console.log(data);
  //     })
  //     .fail((jqXHR, textStatus, errorThrown) => {
  //       console.log(jqXHR.responseText);
  //     })
  //   }
  // });

  // $("#deleteDevice").on("click", function() {
  //   api.device.delete(device.id)
  //     .done((data, textStatus, jqXHR) => {
  //       console.log(data);
  //     })
  //     .fail((jqXHR, textStatus, errorThrown) => {
  //       console.log(jqXHR.responseText);
  //     })
  // });

  // $("#getDevice").on("click", function() {
  //   //debugger;
  //   api.device.get(device.id)
  //     .done((data, textStatus, jqXHR) => {
  //       console.log(data);
  //     })
  //     .fail((jqXHR, textStatus, errorThrown) => {
  //       console.log(jqXHR.responseText);
  //     })
  // });

});