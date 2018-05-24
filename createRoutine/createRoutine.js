var routine;
var actions = [];
var device;
var acId = "li6cbv5sdlatti0j";
var blindId = "eu0v2xgprrhhg41g";
var lampId = "go46xmbqeomjrsjr";
var ovenId = "im77xxyulpegfmv8";
var doorId = "lsf78ly0eqrjbz91";
var refriId = "rnizejqr2di0okho";
var prevDeviceButton;
var prevDevice;

$(document).ready(function() {
  $("#routineName").focus();
  
  api.device.getAll()
    .done(function(data, textStatus, jqXHR) {
        data.devices.forEach(function(device) {
          var name = device.name;
          var typeId = device.typeId;
          var id = device.id;
          if(typeId === acId) {
            VueInstance.addItem(name, "AIR CONDITIONER", "../assets/ACIcon.png", id);
          } else if(typeId === blindId) {
            VueInstance.addItem(name, "BLINDS", "../assets/BlindsIcon.png", id);
          } else if(typeId === doorId) {
            VueInstance.addItem(name, "DOOR", "../assets/DoorIcon.png", id);
          } else if(typeId === lampId) {
            VueInstance.addItem(name, "LAMP", "../assets/LampIcon.png", id);
          } else if(typeId === ovenId) {
            VueInstance.addItem(name, "OVEN", "../assets/OvenIcon.png", id);
          }  else if(typeId === refriId) {
            VueInstance.addItem(name, "REFRIGERATOR", "../assets/RefrigeratorIcon.png", id);
          }
        })
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR.responseText);
      })

  $(".instances").on("click", "button", function() {
    if(device !== undefined) {
      $(prevDeviceButton).css("background-color", "#C1C1C1");
      if(device.typeId === acId) {
        $("div[name='ac']").css("display", "none");
      } else if(device.typeId === blindId) {
        $("div[name='blinds']").css("display", "none");
      } else if(device.typeId === doorId) {
        $("div[name='door']").css("display", "none");
      } else if(device.typeId === lampId) {
        $("div[name='lamp']").css("display", "none");
      } else if(device.typeId === ovenId) {
        $("div[name='oven']").css("display", "none");
      } else if(device.typeId === refriId) {
        $("div[name='refrigerator']").css("display", "none");
      }
    }
    $(this).css("background-color", "#D6D6D6");
    prevDevice = device;
    prevDeviceButton = this;
    api.device.get($(this).attr('id'))
      .done(function(data, textStatus, jqXHR) {
        device = data.device;
        if(device.typeId === acId) {
          $("div[name='ac']").attr("id", device.id);
          $("div[name='ac']").css("display", "flex");
          $("div[name='ac']").find("h3[name='on-text']").attr("id", 'on-status' + device.id);
          $("div[name='ac']").find(".switch").attr("id", device.id);
          $("div[name='ac']").find(".counter").attr("id", device.id);
          $("div[name='ac']").find("input[name='quantity']").attr("id", 'temp' + device.id);
          $("div[name='ac']").find("form[name='mode-form']").attr("id", 'mode' + device.id);
          $("div[name='ac']").find(".radio-button").attr("id", device.id);
          $("div[name='ac']").find("form[name='v-swing-form']").attr("id", 'vswing' + device.id);
          $("div[name='ac']").find("form[name='h-swing-form']").attr("id", 'hswing' + device.id);
          $("div[name='ac']").find("form[name='fspeed']").attr("id", 'fanspeed' + device.id);
        } else if(device.typeId === blindId) {
          $("div[name='blinds']").attr("id", device.id);
          $("div[name='blinds']").css("display", "flex");
          $("div[name='blinds']").find("h3[name='open-text']").attr("id", 'open-status' + device.id);
          $("div[name='blinds']").find(".switch").attr("id", device.id);
        } else if(device.typeId === doorId) {
          $("div[name='door']").attr("id", device.id);
          $("div[name='door']").css("display", "flex");
          $("div[name='door']").find("h3[name='open-text']").attr("id", 'open-status' + device.id);
          $("div[name='door']").find("h3[name='lock-text']").attr("id", 'lock-status' + device.id);
          $("div[name='door']").find(".switch").attr("id", device.id);
        } else if(device.typeId === lampId) {
          $("div[name='lamp']").attr("id", device.id);
          $("div[name='lamp']").css("display", "flex");
          $("div[name='lamp']").find("h3[name='on-text']").attr("id", 'on-status' + device.id);
          $("div[name='lamp']").find(".switch").attr("id", device.id);
          $("div[name='lamp']").find(".color-selection").attr("id", device.id);
          $("div[name='lamp']").find(".color-preview").attr("id", 'colorPreview' + device.id);
          $("div[name='lamp']").find(".slider-container").attr("id", device.id);
        } else if(device.typeId === ovenId) {
          $("div[name='oven']").attr("id", device.id);
          $("div[name='oven']").css("display", "flex");
          $("div[name='oven']").find("h3[name='on-text']").attr("id", 'on-status' + device.id);
          $("div[name='oven']").find(".switch").attr("id", device.id);
          $("div[name='oven']").find(".oven-heat").attr("id", device.id);
          $("div[name='oven']").find("form[name='heat-form']").attr("id", 'heat' + device.id);
          $("div[name='oven']").find(".radio-button").attr("id", device.id);
          $("div[name='oven']").find("form[name='grill-form']").attr("id", 'grill' + device.id);
          $("div[name='oven']").find("form[name='conv-form']").attr("id", 'conv' + device.id);
        } else if(device.typeId === refriId) {
          $("div[name='refrigerator']").attr("id", device.id);
          $("div[name='refrigerator']").css("display", "flex");
          $("div[name='refrigerator']").find(".counter").attr("id", device.id);
          $("div[name='refrigerator']").find("input[name='quantity']").attr("id", 'temp' + device.id);
          $("div[name='refrigerator']").find("input[name='freez-quantity']").attr("id", 'freez' + device.id);
          $("div[name='refrigerator']").find(".radio-button").attr("id", device.id);
          $("div[name='refrigerator']").find("form[name='mode-form']").attr("id", 'mode' + device.id);
        }
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR.responseText);
      });

  })

  $("#createRoutine").on("click", function() {
    var name = $("#routineName").val();
    var meta = "{}";
    routine = new api.model.room(null, name, actions, meta);
    api.routine.add(routine)
      .done((data, textStatus, jqXHR) => {
        routine.id = data.routine.id;
        window.location.href = "../routines.html";
      })
      .fail((jqXHR, textStatus, errorThrown) => {
        console.log(jqXHR.responseText);
      });
  });

  $("#open-switch").on("click", function() {
    var id = $(this).parent().attr('id');
    var status = $("#open-status" + id).text();
    var data;
    if(status === "Open") {
      data = { deviceId: id, actionName: "close", params: [], meta: {}};
      $("#open-status" + id).text("Closed");
    } else {
      data = { deviceId: id, actionName: "open", params: [], meta: {}};
      $("#open-status" + id).text("Open");
    }
    console.log(data);
    actions.push(data);
  });

  $("#lock-switch").on("click", function() {
    var id = $(this).parent().attr('id');
    var status = $("#lock-status" + id).text();
    var data;
    if(status === "Locked") {
      data = { deviceId: id, actionName: "unlock", params: [], meta: {}};
      $("#lock-status" + id).text("Unlocked");
    } else {
      data = { deviceId: id, actionName: "lock", params: [], meta: {}};
      $("#lock-status" + id).text("Locked");
    }
    actions.push(data);
  });

  $("#acminus").on("click", function() {
    var id = $(this).parent().attr('id');
    var temp = parseInt($('#temp' + id).val());
    if(temp > 18) {
      temp--;
      $('#temp' + id).val(temp);
      var data = { deviceId: id, actionName: "setTemperature", params: [temp], meta: {}};
      actions.push(data);
    }
  });

  $("#acplus").on("click", function() {
    var id = $(this).parent().attr('id');
    var temp = parseInt($('#temp' + id).val());
    if(temp < 38) {
      temp++;
      $('#temp' + id).val(temp);
      var data = { deviceId: id, actionName: "setTemperature", params: [temp], meta: {}};
      actions.push(data);
    }
  });

  $("#minus").on("click", function() {
    var id = $(this).parent().attr('id');
    var temp = parseInt($('#temp' + id).val());
    if(temp > 2) {
      temp--;
      $('#temp' + id).val(temp);
      var data = { deviceId: id, actionName: "setTemperature", params: [temp], meta: {}};
      actions.push(data);
    }
  });

  $("#plus").on("click", function() {
    var id = $(this).parent().attr('id');
    var temp = parseInt($('#temp' + id).val());
    if(temp < 8) {
      temp++;
      $('#temp' + id).val(temp);
      var data = { deviceId: id, actionName: "setTemperature", params: [temp], meta: {}};
      actions.push(data);
    }
  });

  $("#freezMinus").on("click", function() {
    var id = $(this).parent().attr('id');
    var temp = parseInt($('#freez' + id).val());
    if(temp > -20) {
      temp--;
      $('#freez' + id).val(temp);
      var data = { deviceId: id, actionName: "setFreezerTemperature", params: [temp], meta: {}};
      actions.push(data);
    }
  });

  $("#freezPlus").on("click", function() {
    var id = $(this).parent().attr('id');
    var temp = parseInt($('#freez' + id).val());
    if(temp < -8) {
      temp++;
      $('#freez' + id).val(temp);
      var data = { deviceId: id, actionName: "setFreezerTemperature", params: [temp], meta: {}};
      actions.push(data);
    }
  });

  $('input[name=mode]').on("change", function() {
    var id = $(this).parent().attr('id');
    var state = $('input[name=mode]:checked', '#mode' + id).val();
    var data = { deviceId: id, actionName: "setMode", params: [state], meta: {}};
    actions.push(data);
  });

  $("#on-switch").on("click", function() {
    var id = $(this).parent().attr('id');
    var status = $("#on-status" + id).text();
    var data;
    if(status === "On") {
      $("#on-status" + id).text("Off");
      data = { deviceId: id, actionName: "turnOff", params: [], meta: {}};
    } else {
      $("#on-status" + id).text("On");
      data = { deviceId: id, actionName: "turnOn", params: [], meta: {}};
    }
    console.log(data);
    actions.push(data);
  });


  $("#color").on("change", function() {
    var id = $(this).parent().attr('id');
    var hexColor = $('#color :selected').val()
    var data = { deviceId: id, actionName: "setColor", params: [hexColor], meta: {}};
    $("#colorPreview" + id).css("background-color", hexColor);
    actions.push(data);
  });

  $("#brightness").on("mouseup", function() {
    var id = $(this).parent().attr('id');
    var brightness = $("#brightness").val()
    var data = { deviceId: id, actionName: "setBrightness", params: [brightness], meta: {}};
    actions.push(data);
  });

  $('input[name=v-swing]').on("change", function() {
    var id = $(this).parent().attr('id');
    var state = $("form input[name='v-swing']:checked").val();
    var data = { deviceId: id, actionName: "setVerticalSwing", params: [state], meta: {}};
    actions.push(data);
  });

  $('input[name=h-swing]').on("change", function() {
    var id = $(this).parent().attr('id');
    var state = $("form input[name='h-swing']:checked").val();
    var data = { deviceId: id, actionName: "setHorizontalSwing", params: [state], meta: {}};
    actions.push(data);
  });

  $('input[name=fan-speed]').on("change", function() {
    var id = $(this).parent().attr('id');
    var state = $("form input[name='fan-speed']:checked").val();
    var data = { deviceId: id, actionName: "setFanSpeed", params: [state], meta: {}};
    actions.push(data);
  });


  $("#temperature").on("mouseup", function() {
    var id = $(this).parent().attr('id');
    var temp = $("#temperature").val();
    var data = { deviceId: id, actionName: "setTemperature", params: [temp], meta: {}};
    actions.push(data);
  });

  $('input[name=heat]').on("change", function() {
    var id = $(this).parent().attr('id');
    var state = $("form input[name='heat']:checked").val();
    var data = { deviceId: id, actionName: "setHeat", params: [state], meta: {}};
    actions.push(data);
  });

  $('input[name=grill]').on("change", function() {
    var id = $(this).parent().attr('id');
    var state = $("form input[name='grill']:checked").val();
    var data = { deviceId: id, actionName: "setGrillHeat", params: [state], meta: {}};
    actions.push(data);
  });

  $('input[name=convection]').on("change", function() {
    var id = $(this).parent().attr('id');
    var state = $("form input[name='convection']:checked").val();
    var data = { deviceId: id, actionName: "setConvection", params: [state], meta: {}};
    actions.push(data);
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
