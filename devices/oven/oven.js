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
      $("#temperature").val(result.temperature);
      $("#heat" + result.heat).prop("checked", true);
      $("#grill" + result.grill).prop("checked", true);
      $("#conv" + result.convection).prop("checked", true);
    })
    .fail((jqXHR, textStatus, errorThrown) => {
      console.log(jqXHR.responseText);
      $("#on-status").text("Off");
      $("#temperature").val(90);
      $("#heatconventional").prop("checked", true);
      $("#grilloff").prop("checked", true);
      $("#convoff").prop("checked", true);
    })


  $("#on-switch").on("click", function() {
    var status = $("#on-status").text();
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

  $("#temperature").on("mouseup", function() {
    var temp = $("#temperature").val();
    //api.device.executeAction(device.id, "setTemperature", info)
    //.done((data, textStatus, jqXHR) => {
    //})
    //.fail((jqXHR, textStatus, errorThrown) => {
    //  console.log(jqXHR.responseText);
    //})
  });

  $('input[name=heat]').on("change", function() {
    var state = $("form input[name='heat']:checked").val();
    //api.device.executeAction(device.id, "setHeat(state)")
    //.done((data, textStatus, jqXHR) => {
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

  // Slider text update
  var rangeSlider = function(){
    var slider = $('.oven-heat'),
        range = $('.slider'),
        value = $('.oven-heat-text');
    slider.each(function(){
      value.each(function(){
        var value = $(this).prev().attr('value');
        $(this).html(value);
      });
      range.on('input', function(){
        $(this).next(value).html(this.value);
      });
    });
  };
  rangeSlider();
});
