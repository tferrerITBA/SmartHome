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
          if(data.result.status === "opened" || data.result.status === "opening") {
            $("#open-status").text("Open");
            $("#open-switch").prop("checked", true);
          } else {
            $("#open-status").text("Closed");
          }
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
          console.log(jqXHR.responseText);
          $("#open-status").text("Closed");
        })
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
      console.log(jqXHR.responseText);
    });

  $("#open-switch").on("click", function() {
    var status = $("#open-status").text();
    if(status === "Open") {
      api.device.executeAction(device.id, "down", [])
        .done(function(data, textStatus, jqXHR) {
          $("#open-status").text("Closed");
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
         console.log(jqXHR.responseText);
        })
    } else {
      api.device.executeAction(device.id, "up", [])
        .done(function(data, textStatus, jqXHR) {
          $("#open-status").text("Open");
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
         console.log(jqXHR.responseText);
        })
    }
  });

});
