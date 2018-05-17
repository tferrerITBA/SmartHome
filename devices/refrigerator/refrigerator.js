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
          $('input[name=quantity]').val(result.temperature);
          $('input[name=freez-quantity]').val(result.freezerTemperature);
          $("#" + result.mode).prop("checked", true);
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
          console.log(jqXHR.responseText);
          $('input[name=quantity]').val(2);
          $('input[name=freez-quantity]').val(-8);
          $("#default").prop("checked", true);
        })
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR.responseText);
      });

  $("#minus").on("click", function() {
    var temp = parseInt($('input[name=quantity]').val());
    if(temp > 2) {
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
    if(temp < 8) {
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

  $("#freezMinus").on("click", function() {
    var temp = parseInt($('input[name=freez-quantity]').val());
    if(temp > -20) {
      temp--;
    }
    api.device.executeAction(device.id, "setFreezerTemperature", [temp])
      .done(function(data, textStatus, jqXHR) {
         $('input[name=freez-quantity]').val(temp);
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
       console.log(jqXHR.responseText);
      })
  });

  $("#freezPlus").on("click", function() {
    var temp = parseInt($('input[name=freez-quantity]').val());
    if(temp < -8) {
      temp++;
    }
    api.device.executeAction(device.id, "setFreezerTemperature", [temp])
      .done(function(data, textStatus, jqXHR) {
         $('input[name=freez-quantity]').val(temp);
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
});
