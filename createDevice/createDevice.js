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
        device = new api.model.device(null, deviceIdType, deviceName, "{}");
        api.device.add(device)
          .done(function(data, textStatus, jqXHR) {
            device.id = data.device.id;
            window.location.href = "../devices.html";
          })
          .fail(function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR.responseText);
            var str = JSON.stringify(jqXHR.responseText, null, 2);
            var errorMessage = "";
            str = str.replace(/(?:\\[rn])+/g, "");
            str = str.replace(/[^\w\s]/gi, '');
            if(str.indexOf('name is required') >= 0) {
              errorMessage = errorMessage.concat("A name is required; ");
            }
            if(str.indexOf('fails to match the required pattern') >= 0) {
              errorMessage = errorMessage.concat("Enter alphanumeric characters only; ");
            }
            if(str.indexOf('length must be') >= 0) {
              errorMessage = errorMessage.concat("Please enter between 3 and 60 characters; ");
            }
            if(errorMessage != "")
              $("#input-error").text(errorMessage);
            else
              $("#input-error").text(str);
          })
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR.responseText);
      })
  });
});
