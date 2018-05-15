$(document).ready(function() {

  //$(".title-text").text(device.name);

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

  $("#minus").on("click", function() {
    var temp = parseInt($('input[name=quantity]').val());
    if(temp > 18) {
      temp--;
    }
    //api.device.executeAction(device.id, "setTemperature(temp)")
    //.done((data, textStatus, jqXHR) => {
       $('input[name=quantity]').val(temp);
    //})
    //.fail((jqXHR, textStatus, errorThrown) => {
    //  console.log(jqXHR.responseText);
    //})
  });

  $("#plus").on("click", function() {
    var temp = parseInt($('input[name=quantity]').val());
    if(temp < 38) {
      temp++;
    }
    //api.device.executeAction(device.id, "setTemperature(temp)")
    //.done((data, textStatus, jqXHR) => {
       $('input[name=quantity]').val(temp);
    //})
    //.fail((jqXHR, textStatus, errorThrown) => {
    //  console.log(jqXHR.responseText);
    //})
  });

  $('input[name=mode]').on("change", function() {
    var state = $("form input[name='mode']:checked").val();
    //api.device.executeAction(device.id, "setMode(state)")
    //.done((data, textStatus, jqXHR) => {
    //})
    //.fail((jqXHR, textStatus, errorThrown) => {
    //  console.log(jqXHR.responseText);
    //})
  });

  $('input[name=v-swing]').on("change", function() {
    var state = $("form input[name='v-swing']:checked").val();
    //api.device.executeAction(device.id, "setVerticalSwing(state)")
    //.done((data, textStatus, jqXHR) => {
    //})
    //.fail((jqXHR, textStatus, errorThrown) => {
    //  console.log(jqXHR.responseText);
    //})
  });

  $('input[name=h-swing]').on("change", function() {
    var state = $("form input[name='h-swing']:checked").val();
    //api.device.executeAction(device.id, "setHorizontalSwing(state)")
    //.done((data, textStatus, jqXHR) => {
    //})
    //.fail((jqXHR, textStatus, errorThrown) => {
    //  console.log(jqXHR.responseText);
    //})
  });

  $('input[name=fan-speed]').on("change", function() {
    var state = $("form input[name='fan-speed']:checked").val();
    //api.device.executeAction(device.id, "setFanSpeed(state)")
    //.done((data, textStatus, jqXHR) => {
    //})
    //.fail((jqXHR, textStatus, errorThrown) => {
    //  console.log(jqXHR.responseText);
    //})
  });
});
