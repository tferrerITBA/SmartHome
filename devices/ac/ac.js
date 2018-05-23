$(document).ready(function() {

  var queryString = decodeURIComponent(window.location.search);
  queryString = queryString.substring(1);
  var queries = queryString.split("=");

  api.device.get(queries[1])
    .done(function(data, textStatus, jqXHR) {
      device = data.device;
      $(".title-text").text(device.name);
      api.device.executeAction(device.id, "getState", [])
        .done(function(data, textStatus, jqXHR) {
          var result = data.result;
          if(result.status === "on") {
            $("#on-status").text("On");
            $("#on-switch").prop("checked", true);
          } else {
            $("#on-status").text("Off");
          }
          $('input[name=quantity]').val(result.temperature);
          $("#" + result.mode).prop("checked", true);
          $("#vSwing" + result.verticalSwing).prop("checked", true);
          $("#hSwing" + result.horizontalSwing).prop("checked", true);
          $("#fanSpeed" + result.fanSpeed).prop("checked", true);
          
          var hasRoom = device.meta.split("hasRoom: ")[1].split(" }")[0];
          if(hasRoom === "false") {
            $("#selectRoom").prop("disabled", false);
            $("#deselectRoom").css("cursor", "default");
            $("#deselectRoom").prop("disabled", true);
          } else {
            $("#selectRoom").prop("disabled", true);
            $("#selectRoom").css("cursor", "default");
            $("#deselectRoom").prop("disabled", false);
          }
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
          console.log(jqXHR.responseText);
          $("#on-status").text("Off");
          $('input[name=quantity]').text("24");
          $("#cool").prop("checked", true);
          $("#vSwingauto").prop("checked", true);
          $("#hSwingauto").prop("checked", true);
          $("#fanSpeedauto").prop("checked", true);
        })
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
      console.log(jqXHR.responseText);
    });

  $("#on-switch").on("click", function() {
    var status = $("#on-status").text();
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

  $("#minus").on("click", function() {
    var temp = parseInt($('input[name=quantity]').val());
    if(temp > 18) {
      temp--;
    }
    api.device.executeAction(device.id, "setTemperature", [temp])
      .done(function(data, textStatus, jqXHR) {
         $('input[name=quantity]').val(temp);
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
       console.log(jqXHR.responseText);
      })
  });

  $("#plus").on("click", function() {
    var temp = parseInt($('input[name=quantity]').val());
    if(temp < 38) {
      temp++;
    }
    api.device.executeAction(device.id, "setTemperature", [temp])
      .done(function(data, textStatus, jqXHR) {
         $('input[name=quantity]').val(temp);
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
       console.log(jqXHR.responseText);
      })
  });

  $('input[name=mode]').on("change", function() {
    var state = $("form input[name='mode']:checked").val();
    api.device.executeAction(device.id, "setMode", [state])
      .done(function(data, textStatus, jqXHR) {
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
       console.log(jqXHR.responseText);
      })
  });

  $('input[name=v-swing]').on("change", function() {
    var state = $("form input[name='v-swing']:checked").val();
    api.device.executeAction(device.id, "setVerticalSwing", [state])
      .done(function(data, textStatus, jqXHR) {
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
       console.log(jqXHR.responseText);
      })
  });

  $('input[name=h-swing]').on("change", function() {
    var state = $("form input[name='h-swing']:checked").val();
    api.device.executeAction(device.id, "setHorizontalSwing", [state])
      .done(function(data, textStatus, jqXHR) {
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
       console.log(jqXHR.responseText);
      })
  });

  $('input[name=fan-speed]').on("change", function() {
    var state = $("form input[name='fan-speed']:checked").val();
    api.device.executeAction(device.id, "setFanSpeed", [state])
      .done(function(data, textStatus, jqXHR) {
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
       console.log(jqXHR.responseText);
      })
  });

});
