var device;
var acId = "li6cbv5sdlatti0j";
var blindId = "eu0v2xgprrhhg41g";
var lampId = "go46xmbqeomjrsjr";
var ovenId = "im77xxyulpegfmv8";
var doorId = "lsf78ly0eqrjbz91";
var refriId = "rnizejqr2di0okho";

$(document).ready(function() {
  api.device.getAll()
    .done((data, textStatus, jqXHR) => {
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
    .fail((jqXHR, textStatus, errorThrown) => {
      console.log(jqXHR.responseText);
    })

  
    $("button").on("click", function() {
      console.log($(this).attr('id'));
      if (id  === undefined) {
        api.device.get($(this).attr('id'))
        .done((data, textStatus, jqXHR) => {
          device = data.device;
          console.log(data);
          if(device.typeId === acId) {
            //redirigir a html de ac
          } else if(false) {

          }
        })
        .fail((jqXHR, textStatus, errorThrown) => {
          console.log(jqXHR.responseText);
        });
      }
    });

  $("#modifyDevice").on("click", function() {
    var name = $("#name").val();;
    if (name !== "") {
      device.name = name;
      api.device.modify(device)
      .done((data, textStatus, jqXHR) => {
        console.log(data);
      })
      .fail((jqXHR, textStatus, errorThrown) => {
        console.log(jqXHR.responseText);
      })
    }
  });

  $("#deleteDevice").on("click", function() {
    api.device.delete(device.id)
      .done((data, textStatus, jqXHR) => {
        console.log(data);
      })
      .fail((jqXHR, textStatus, errorThrown) => {
        console.log(jqXHR.responseText);
      })
  });

  $("#getDevice").on("click", function() {
    debugger;
    api.device.get(device.id)
      .done((data, textStatus, jqXHR) => {
        console.log(data);
      })
      .fail((jqXHR, textStatus, errorThrown) => {
        console.log(jqXHR.responseText);
      })
  });

});
