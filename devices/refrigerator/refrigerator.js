$(document).ready(function() {

  //$(".title-text").text(device.name);

  $("#minus").on("click", function() {
    var temp = parseInt($('input[name=quantity]').val());
    if(temp > 2) {
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
    if(temp < 8) {
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

  $("#freezMinus").on("click", function() {
    var temp = parseInt($('input[name=freez-quantity]').val());
    if(temp > -20) {
      temp--;
    }
    //api.device.executeAction(device.id, "setFreezerTemperature(temp)")
    //.done((data, textStatus, jqXHR) => {
       $('input[name=freez-quantity]').val(temp);
    //})
    //.fail((jqXHR, textStatus, errorThrown) => {
    //  console.log(jqXHR.responseText);
    //})
  });

  $("#freezPlus").on("click", function() {
    var temp = parseInt($('input[name=freez-quantity]').val());
    if(temp < -8) {
      temp++;
    }
    //api.device.executeAction(device.id, "setFreezerTemperature(temp)")
    //.done((data, textStatus, jqXHR) => {
       $('input[name=freez-quantity]').val(temp);
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
});
