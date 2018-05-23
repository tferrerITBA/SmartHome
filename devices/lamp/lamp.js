$(document).ready(function() {

  var queryString = decodeURIComponent(window.location.search);
  queryString = queryString.substring(1);
  var queries = queryString.split("=");

  api.device.get(queries[1])
    .done(function(data, textStatus, jqXHR) {
      device = data.device;
      $(".title-text").text(device.name);
      document.title = device.name + " - Smart Home";
      api.device.executeAction(device.id, "getState", [])
        .done(function(data, textStatus, jqXHR) {
          if (data.result.status === "on") {
            $("#on-status").text("On");
            $("#on-switch").prop("checked", true);
          } else {
            $("#on-status").text("Off");
          }
          $("#color").val(data.result.color);
          $(".color-preview").css("background-color", data.result.color);
          $("#brightness").val(data.result.brightness);
          
          var fav = device.meta.split("favorite: ")[1].split(" }")[0];
          if(fav === "false") {
            $("#favorite").children().css("background-color", "white");
          } else {
            $("#favorite").children().css("background-color", "#FEA500");
          }
          
          var hasRoom = device.meta.split("hasRoom: ")[1].split(",")[0];
          if(hasRoom === "false") {
            $("#selectRoom").prop("disabled", false);
            $("#deselectRoom").prop("disabled", true);
          } else {
            $("#selectRoom").prop("disabled", true);
            $("#deselectRoom").prop("disabled", false);
          }
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
          console.log(jqXHR.responseText);
          $("#on-status").text("Off");
          $(".color-preview").css("background-color", "#FFFFFF");
          $("#color").val("FFFFFF");
          $("#brightness").val(100)
        })
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
      console.log(jqXHR.responseText);
    });

  $("#on-switch").on("click", function() {
    var status = $("#on-status").text()
    if(status === "On") {
      api.device.executeAction(device.id, "turnOff", [])
        .done(function(data, textStatus, jqXHR) {
          $("#on-status").text("Off");
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
         console.log(jqXHR.responseText);
        })
    } else {
      api.device.executeAction(device.id, "turnOn", [])
        .done(function(data, textStatus, jqXHR) {
          $("#on-status").text("On");
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
         console.log(jqXHR.responseText);
        })
    }
  });

  $("#color").on("change", function() {
    var hexColor = $('#color :selected').val()
    api.device.executeAction(device.id, "setColor", [hexColor])
      .done(function(data, textStatus, jqXHR) {
        $(".color-preview").css("background-color", hexColor);
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
       console.log(jqXHR.responseText);
      })
  });

  $("#brightness").on("mouseup", function() {
    var brightness = $("#brightness").val()
    api.device.executeAction(device.id, "setBrightness", [brightness])
      .done(function(data, textStatus, jqXHR) {
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
       console.log(jqXHR.responseText);
      })
  });

});
