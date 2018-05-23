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
          var result = data.result;
          if (result.status === "on") {
            $("#on-status").text("On");
            $("#on-switch").prop("checked", true);
          } else {
            $("#on-status").text("Off");
          }
          $("#temperature").val(result.temperature);
          $("#heat-text").text(result.temperature);
          $("#heat" + result.heat).prop("checked", true);
          $("#grill" + result.grill).prop("checked", true);
          $("#conv" + result.convection).prop("checked", true);

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
          $("#temperature").val(90);
          $("#heatconventional").prop("checked", true);
          $("#grilloff").prop("checked", true);
          $("#convoff").prop("checked", true);
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

  $("#temperature").on("mouseup", function() {
    var temp = $("#temperature").val();
    api.device.executeAction(device.id, "setTemperature", [temp])
      .done(function(data, textStatus, jqXHR) {
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
       console.log(jqXHR.responseText);
      })
  });

  $('input[name=heat]').on("change", function() {
    var state = $("form input[name='heat']:checked").val();
    api.device.executeAction(device.id, "setHeat", [state])
      .done(function(data, textStatus, jqXHR) {
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
       console.log(jqXHR.responseText);
      })
  });

  $('input[name=grill]').on("change", function() {
    var state = $("form input[name='grill']:checked").val();
    api.device.executeAction(device.id, "setGrill", [state])
      .done(function(data, textStatus, jqXHR) {
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
       console.log(jqXHR.responseText);
      })
  });

  $('input[name=convection]').on("change", function() {
    var state = $("form input[name='convection']:checked").val();
    api.device.executeAction(device.id, "setConvection", [state])
      .done(function(data, textStatus, jqXHR) {
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
       console.log(jqXHR.responseText);
      })
  });

  // Slider text update
  var rangeSlider = function(){
    var slider = $('.oven-heat'),
        range = $('.slider'),
        value = $('.oven-heat-text');
    slider.each(function(){
      value.each(function(){
        var value = $(this).prev().attr('value');
        $(this).html(value);
      });
      range.on('input', function(){
        $(this).next(value).html(this.value);
      });
    });
  };
  rangeSlider();
});
