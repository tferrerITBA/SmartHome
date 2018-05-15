$(document).ready(function() {
  //$(".title-text").text(device.name);

  api.device.executeAction(device.id, "getState", [])
    .done((data, textStatus, jqXHR) => {
      if (data.result.status === "opened") {
        $("#open-status").text("Open");
        $("#open-switch").prop("checked", true);
      } else {
        $("#open-status").text("Closed");
      }
    })
    .fail((jqXHR, textStatus, errorThrown) => {
      console.log(jqXHR.responseText);
      $("#open-status").text("Closed");
    })


  $("#open-switch").on("click", function() {
    var status = $("#open-status").text();
    if(status === "Open") {
      //api.device.executeAction(device.id, "down", [])
      //.done((data, textStatus, jqXHR) => {
        $("#open-status").text("Closed");
      //})
      //.fail((jqXHR, textStatus, errorThrown) => {
      //  console.log(jqXHR.responseText);
      //})
    } else {
      //api.device.executeAction(device.id, "up", [])
      //.done((data, textStatus, jqXHR) => {
        $("#open-status").text("Open");
      //})
      //.fail((jqXHR, textStatus, errorThrown) => {
      //  console.log(jqXHR.responseText);
      //})
    }
  });
});
