var routine;
var acId = "li6cbv5sdlatti0j";
var blindId = "eu0v2xgprrhhg41g";
var lampId = "go46xmbqeomjrsjr";
var ovenId = "im77xxyulpegfmv8";
var doorId = "lsf78ly0eqrjbz91";
var refriId = "rnizejqr2di0okho";

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
              $("#deviceActions").append("<p>" + action.actionName + "</p>")
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
});
