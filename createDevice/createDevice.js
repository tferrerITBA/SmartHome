var device;

$(document).ready(function() {
  $("#createDevice").on("click", function() {
    var deviceName = $("#deviceName").val();
    api.deviceType.getTypes()
      .done(function(data, textStatus, jqXHR) {
        var deviceType = $("#deviceType").val();
        var deviceIdType = data.devices.filter(
          function(device){
            return device.name === deviceType;
          })[0].id;
        var meta = "{ hasRoom: " + false + " }";
        device = new api.model.device(null, deviceIdType, deviceName, meta);
        api.device.add(device)
          .done(function(data, textStatus, jqXHR) {
            device.id = data.device.id;
            window.location.href = "../devices.html";
          })
          .fail(function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR.responseText);
          })
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR.responseText);
      })
  });
});
