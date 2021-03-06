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
          if (data.result.status === "opened" || data.result.status === "opening") {
            $("#open-status").text("Open");
            $("#open-switch").prop("checked", true);
          } else {
            $("#open-status").text("Closed");
          }
          if (data.result.lock === "locked") {
            $("#lock-status").text("Locked");
            $("#lock-switch").prop("checked", true);
          } else {
            $("#lock-status").text("Unlocked");
          }
          
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
          $("#open-status").text("Closed");
          $("#lock-status").text("Unlocked");
        })
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
      console.log(jqXHR.responseText);
    });

  $("#open-switch").on("click", function() {
    var status = $("#open-status").text();
    if(status === "Open") {
      api.device.executeAction(device.id, "close", [])
        .done(function(data, textStatus, jqXHR) {
          $("#open-status").text("Closed");
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
         console.log(jqXHR.responseText);
        })
    } else {
      api.device.executeAction(device.id, "open", [])
        .done(function(data, textStatus, jqXHR) {
          $("#open-status").text("Open");
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
         console.log(jqXHR.responseText);
        })
    }
  });

  $("#lock-switch").on("click", function() {
    var status = $("#lock-status").text();
    if(status === "Locked") {
      api.device.executeAction(device.id, "unlock", [])
        .done(function(data, textStatus, jqXHR) {
          $("#lock-status").text("Unlocked");
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
         console.log(jqXHR.responseText);
        })
    } else {
      api.device.executeAction(device.id, "lock", [])
        .done(function(data, textStatus, jqXHR) {
          $("#lock-status").text("Locked");
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
         console.log(jqXHR.responseText);
        })
    }
  });

});
