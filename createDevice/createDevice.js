var device;

$(document).ready(function() {
  $("#createDevice").on("click", function() {
    var deviceName = $("#deviceName").val();
    if (deviceName !== "") {
      api.deviceType.getTypes()
        .done((data, textStatus, jqXHR) => {
          var deviceType = $("#deviceType").val();
          var deviceIdType = data.devices.filter(
            function(device){
              return device.name === deviceType;
            })[0].id;
          device = new api.model.device(null, deviceIdType, deviceName, "{}");
          api.device.add(device)
            .done((data, textStatus, jqXHR) => {
              device.id = data.device.id;
              console.log(data);
            })
            .fail((jqXHR, textStatus, errorThrown) => {
              console.log(jqXHR.responseText);
            })
        })
        .fail((jqXHR, textStatus, errorThrown) => {
          console.log(jqXHR.responseText);
        })
      }
  });
});
