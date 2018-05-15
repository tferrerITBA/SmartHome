$(document).ready(function() {
  //$(".title-text").text(device.name);


  api.device.executeAction(device.id, "getState", [])
    .done((data, textStatus, jqXHR) => {
      if (data.result.status === "opened") {
        $("#open-status").text("Open");
        $("#open-switch").prop("checked", true);
      } else {
        $("#open-status").text("Off");
      }
      if (data.result.lock === "locked") {
        $("#lock-status").text("Locked");
        $("#lock-switch").prop("checked", true);
      } else {
        $("#lock-status").text("Unlocked");
      }
    })
    .fail((jqXHR, textStatus, errorThrown) => {
      console.log(jqXHR.responseText);
      $("#open-status").text("Closed");
      $("#lock-status").text("Unlocked");
    })

  $("#open-switch").on("click", function() {
    var status = $("#open-status").text();
    if(status === "Open") {
      //api.device.executeAction(device.id, "close", [])
      //.done((data, textStatus, jqXHR) => {
        $("#open-status").text("Closed");
      //})
      //.fail((jqXHR, textStatus, errorThrown) => {
      //  console.log(jqXHR.responseText);
      //})
    } else {
      //api.device.executeAction(device.id, "open", [])
      //.done((data, textStatus, jqXHR) => {
        $("#open-status").text("Open");
      //})
      //.fail((jqXHR, textStatus, errorThrown) => {
      //  console.log(jqXHR.responseText);
      //})
    }
  });

  $("#lock-switch").on("click", function() {
    var status = $("#lock-status").text();
    if(status === "Locked") {
      //api.device.executeAction(device.id, "unlock", [])
      //.done((data, textStatus, jqXHR) => {
        $("#lock-status").text("Unlocked");
      //})
      //.fail((jqXHR, textStatus, errorThrown) => {
      //  console.log(jqXHR.responseText);
      //})
    } else {
      //api.device.executeAction(device.id, "lock", [])
      //.done((data, textStatus, jqXHR) => {
        $("#lock-status").text("Locked");
      //})
      //.fail((jqXHR, textStatus, errorThrown) => {
      //  console.log(jqXHR.responseText);
      //})
    }
  });
});
