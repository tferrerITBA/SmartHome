$(document).ready(function() {

  //$(".title-text").text(device.name);

  api.device.executeAction(device.id, "getState", [])
    .done((data, textStatus, jqXHR) => {
      var result = data.result;
      if (result.status === "on") {
        $("#on-status").text("On");
        $("#on-switch").prop("checked", true);
      } else {
        $("#on-status").text("Off");
      }
      // Falta el value de la temp del slider
      $("#heat" + result.heat).prop("checked", true);
      $("#grill" + result.grill).prop("checked", true);
      $("#conv" + result.convection).prop("checked", true);
    })
    .fail((jqXHR, textStatus, errorThrown) => {
      console.log(jqXHR.responseText);
      $("#on-status").text("Off");
      // Falta el value de la temp del slider
      $("#heatconventional").prop("checked", true);
      $("#grilloff").prop("checked", true);
      $("#convoff").prop("checked", true);
    })


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
    if(temp > 90) {
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
    if(temp < 230) {
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

  $('input[name=grill]').on("change", function() {
    var state = $("form input[name='grill']:checked").val();
    //api.device.executeAction(device.id, "setGrill(state)")
    //.done((data, textStatus, jqXHR) => {
    //})
    //.fail((jqXHR, textStatus, errorThrown) => {
    //  console.log(jqXHR.responseText);
    //})
  });

  $('input[name=convection]').on("change", function() {
    var state = $("form input[name='convection']:checked").val();
    //api.device.executeAction(device.id, "setConvection(state)")
    //.done((data, textStatus, jqXHR) => {
    //})
    //.fail((jqXHR, textStatus, errorThrown) => {
    //  console.log(jqXHR.responseText);
    //})
  });
});
