$(document).ready(function() {
  //$(".title-text").text(device.name);
  var hexColor = $('#color :selected').val()
  $(".color-preview").css("background-color", "#" + hexColor);

  $("#on-switch").on("click", function() {
    var status = $("#on-status").text()
    if(status === "On") {
      //api.device.executeAction(device.id, "turnOff")
      //.done((data, textStatus, jqXHR) => {
        $("#on-status").text("Off");
      //})
      //.fail((jqXHR, textStatus, errorThrown) => {
      //  console.log(jqXHR.responseText);
      //})
    } else {
      //api.device.executeAction(device.id, "turnOn")
      //.done((data, textStatus, jqXHR) => {
        $("#on-status").text("On");
      //})
      //.fail((jqXHR, textStatus, errorThrown) => {
      //  console.log(jqXHR.responseText);
      //})
    }
  });

  $("#color").on("change", function() {
    var hexColor = $('#color :selected').val()
    //api.device.executeAction(device.id, "setColor("#" + hexColor)")
    //.done((data, textStatus, jqXHR) => {
      $(".color-preview").css("background-color", "#" + hexColor);
    //})
    //.fail((jqXHR, textStatus, errorThrown) => {
    //  console.log(jqXHR.responseText);
    //})
  });

  $("#brightness").on("mouseup", function() {
    var brightness = $("#brightness").val()
    //api.device.executeAction(device.id, "setBrightness(brightness)")
    //.done((data, textStatus, jqXHR) => {
    //})
    //.fail((jqXHR, textStatus, errorThrown) => {
    //  console.log(jqXHR.responseText);
    //})
  });
});
