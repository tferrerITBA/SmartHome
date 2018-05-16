$(document).ready(function() {

  //$(".title-text").text(device.name);

  api.device.executeAction(device.id, "getState", [])
    .done((data, textStatus, jqXHR) => {
      var result = data.result;
      $('input[name=quantity]').val(result.temperature);
      $('input[name=freez-quantity]').val(result.freezerTemperature);
      $("#" + result.mode).prop("checked", true);
    })
    .fail((jqXHR, textStatus, errorThrown) => {
      console.log(jqXHR.responseText);
      $('input[name=quantity]').val(2);
      $('input[name=freez-quantity]').val(-8);
      $("#default").prop("checked", true);
    })

  $("#minus").on("click", function() {
    var temp = parseInt($('input[name=quantity]').val());
    if(temp > 2) {
      temp--;
    }
    $('input[name=quantity]').val(temp);
    //api.device.executeAction(device.id, "setTemperature(temp)")
    //.done((data, textStatus, jqXHR) => {
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
    $('input[name=quantity]').val(temp);
    //api.device.executeAction(device.id, "setTemperature(temp)")
    //.done((data, textStatus, jqXHR) => {
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
    $('input[name=freez-quantity]').val(temp);
    //api.device.executeAction(device.id, "setFreezerTemperature(temp)")
    //.done((data, textStatus, jqXHR) => {
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
    $('input[name=freez-quantity]').val(temp);
    //api.device.executeAction(device.id, "setFreezerTemperature(temp)")
    //.done((data, textStatus, jqXHR) => {
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
