var device;

$(document).ready(function() {
  api.device.getAll()
    .done((data, textStatus, jqXHR) => {
      var index;
      for(index = 0; index < data.devices.length; index++){
        // console.log(data.devices[index].id);
      }
    })
    .fail((jqXHR, textStatus, errorThrown) => {
      console.log(jqXHR.responseText);
    })

  $("#createDevice").on("click", function() {
    api.deviceType.getTypes()
      .done((data, textStatus, jqXHR) => {
        var deviceName = $("#deviceName").val();
        var deviceType = $("#deviceType").val();
        var deviceIdType = data.devices.filter(
          function(device){
            return device.name === deviceType;
          })[0].id;
        device = new api.model.device(null, deviceIdType, deviceName, "{}");
        api.device.add(device)
          .done((data, textStatus, jqXHR) => {
            room.id = data.device.id;
            console.log(data);
          })
          .fail((jqXHR, textStatus, errorThrown) => {
            console.log(jqXHR.responseText);
          })
      })
      .fail((jqXHR, textStatus, errorThrown) => {
        console.log(jqXHR.responseText);
      })
  });

  $("#modifyDevice").on("click", function() {
    device.meta = "{ state: {}, actions: {} }";

    api.device.modify(device)
      .done((data, textStatus, jqXHR) => {
        console.log(data);
      })
      .fail((jqXHR, textStatus, errorThrown) => {
        console.log(jqXHR.responseText);
      })
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
