$(document).ready(function() {

  var queryString = decodeURIComponent(window.location.search);
  queryString = queryString.substring(1);
  var queries = queryString.split("=");

  api.device.get(queries[1])
    .done((data, textStatus, jqXHR) => {
      device = data.device;
      $(".title-text").text(device.name);
      api.device.executeAction(device.id, "getState", [])
        .done((data, textStatus, jqXHR) => {
          if (data.result.status === "on") {
            $("#on-status").text("On");
            $("#on-switch").prop("checked", true);
          } else {
            $("#on-status").text("Off");
          }
          $("#color").val(data.result.color);
          $(".color-preview").css("background-color", data.result.color);
         
          console.log(data.result.color);
          $("#brightness").val(data.result.brightness);
        })
        .fail((jqXHR, textStatus, errorThrown) => {
          console.log(jqXHR.responseText);
          $("#on-status").text("Off");
          $(".color-preview").css("background-color", "#FFFFFF");
          $("#color").val("FFFFFF");
          $("#brightness").val(100)
        })
    })
    .fail((jqXHR, textStatus, errorThrown) => {
      console.log(jqXHR.responseText);
    });

  $("#on-switch").on("click", function() {
    var status = $("#on-status").text()
    if(status === "On") {
      api.device.executeAction(device.id, "turnOff", [])
        .done((data, textStatus, jqXHR) => {
          $("#on-status").text("Off");
        })
        .fail((jqXHR, textStatus, errorThrown) => {
         console.log(jqXHR.responseText);
        })
    } else {
      api.device.executeAction(device.id, "turnOn", [])
        .done((data, textStatus, jqXHR) => {
          $("#on-status").text("On");
        })
        .fail((jqXHR, textStatus, errorThrown) => {
         console.log(jqXHR.responseText);
        })
    }
  });

  $("#color").on("change", function() {
    var hexColor = $('#color :selected').val()
    api.device.executeAction(device.id, "setColor", [hexColor])
      .done((data, textStatus, jqXHR) => {
        $(".color-preview").css("background-color", hexColor);
      })
      .fail((jqXHR, textStatus, errorThrown) => {
       console.log(jqXHR.responseText);
      })
  });

  $("#brightness").on("mouseup", function() {
    var brightness = $("#brightness").val()
    api.device.executeAction(device.id, "setBrightness", [brightness])
      .done((data, textStatus, jqXHR) => {
      })
      .fail((jqXHR, textStatus, errorThrown) => {
       console.log(jqXHR.responseText);
      })
  });

});
