var routine;
var colors = { "#FFFFFF": "White", "#FFFF00": "Yellow", "#FFA500": "Orange", "#FF0000": "Red", "#FF00FF": "Magenta", "#0000FF": "Blue", "#00FFFF": "Cyan", "#00FF00": "Lime"}

$(document).ready(function() {
  var queryString = decodeURIComponent(window.location.search);
  queryString = queryString.substring(1);
  var queries = queryString.split("=");

  api.routine.get(queries[1])
    .done(function(data, textStatus, jqXHR) {
      routine = data.routine;
      icon = "../../assets/gear.png";
      $(".title-text").text(routine.name);
      $("#routineIcon").attr("src", icon);
      document.title = routine.name + " - Smart Home";

      var actions = routine.actions;
      var groups = {};
      var deviceListAction = [];
      var groupName;
      for (var i = 0; i < actions.length; i++) {
        groupName = actions[i].deviceId;
        if (!groups[groupName]) {
          groups[groupName] = [];
        }
        groups[groupName].push({ actionName: actions[i].actionName, params: actions[i].params });
      }
      var devicesActions = []
      Object.keys(groups).forEach(function(key) {
        devicesActions.push({ deviceId: key, actions: groups[key]})
      });
      devicesActions.forEach(function(device) {
        api.device.get(device.deviceId)
          .done(function(data, textStatus, jqXHR) {
            $("#deviceActions").append("<p>" + data.device.name + "</p>")
            device.actions.forEach(function(action) {
              if (action.actionName === "turnOn") {
                $("#deviceActions").append("<p class=action-item>Turn On</p>")
              } else if (action.actionName === "turnOff") {
                $("#deviceActions").append("<p class=action-item>Turn Off</p>")
              } else if (action.actionName === "lock") {
                $("#deviceActions").append("<p class=action-item>Lock</p>")
              } else if (action.actionName === "unlock") {
                $("#deviceActions").append("<p class=action-item>Unlock</p>")
              } else if (action.actionName === "open" || action.actionName === "up") {
                $("#deviceActions").append("<p class=action-item>Open</p>")
              } else if (action.actionName === "close" || action.actionName === "down") {
                $("#deviceActions").append("<p class=action-item>Close</p>")
              } else if (action.actionName === "setTemperature") {
                $("#deviceActions").append("<p class=action-item>Set Temperature: " + action.params[0] + "</p>")
              } else if (action.actionName === "setMode") {
                $("#deviceActions").append("<p class=action-item>Set Mode: " + action.params[0] + "</p>")
              } else if (action.actionName === "setVerticalSwing") {
                $("#deviceActions").append("<p class=action-item>Set Vertical Swing: " + action.params[0] + "</p>")
              } else if (action.actionName === "setHorizontalSwing") {
                $("#deviceActions").append("<p class=action-item>Set Horizontal Swing: " + action.params[0] + "</p>")
              } else if (action.actionName === "setFanSpeed") {
                $("#deviceActions").append("<p class=action-item>Set Fan Speed: " + action.params[0] + "</p>")
              } else if (action.actionName === "setColor") {
                $("#deviceActions").append("<p class=action-item>Set Color: " + colors[action.params[0]] + "</p>")
              } else if (action.actionName === "setBrightness") {
                $("#deviceActions").append("<p class=action-item>Set Brightness: " + action.params[0] + "</p>")
              } else if (action.actionName === "setHeat") {
                $("#deviceActions").append("<p class=action-item>Set Heat: " + action.params[0] + "</p>")
              } else if (action.actionName === "setGrill") {
                $("#deviceActions").append("<p class=action-item>Set Grill: " + action.params[0] + "</p>")
              } else if (action.actionName === "setConvection") {
                $("#deviceActions").append("<p class=action-item>Set Convection: " + action.params[0] + "</p>")
              } else if (action.actionName === "setFreezerTemperature") {
                $("#deviceActions").append("<p class=action-item>Set Freezer Temperature" + action.params[0] + "</p>")
              }
            })
          })
          .fail(function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR.responseText);
          });
      })
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
      console.log(jqXHR.responseText);
    });

    $("#executeRoutine").on("click", function() {
      api.routine.execute(routine.id)
        .done(function(data, textStatus, jqXHR) {
          console.log("Executed!");
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR.responseText);
        });
    })
});
