var device;
var acId = "li6cbv5sdlatti0j";

$(document).ready(function() {
  debugger;
  api.device.getAll()
    .done((data, textStatus, jqXHR) => {
      data.devices.forEach(function(device){
        // console.log(device.id);
      })
    })
    .fail((jqXHR, textStatus, errorThrown) => {
      console.log(jqXHR.responseText);
    })

  $(function(){
    $('button').click(function(){
      console.log($(this).attr('id'));
      if (id  === undefined) {
        api.device.get($(this).attr('id'))
        .done((data, textStatus, jqXHR) => {
          device = data.device;
          console.log(data);
          if(device.typeId === acId) {
            //redirigir a html de ac
          } else if(false) {

          }
        })
        .fail((jqXHR, textStatus, errorThrown) => {
          console.log(jqXHR.responseText);
        });
      }
    });
  });

  $("#modifyDevice").on("click", function() {
    var name = $("#name").val();;
    if (name !== "") {
      device.name = name;
      api.device.modify(device)
      .done((data, textStatus, jqXHR) => {
        console.log(data);
      })
      .fail((jqXHR, textStatus, errorThrown) => {
        console.log(jqXHR.responseText);
      })
    }
  });

  $("#deleteDevice").on("click", function() {
    api.device.delete(device.id)
      .done((data, textStatus, jqXHR) => {
        console.log(data);
      })
      .fail((jqXHR, textStatus, errorThrown) => {
        console.log(jqXHR.responseText);
      })
  });

  $("#getDevice").on("click", function() {
    debugger;
    api.device.get(device.id)
      .done((data, textStatus, jqXHR) => {
        console.log(data);
      })
      .fail((jqXHR, textStatus, errorThrown) => {
        console.log(jqXHR.responseText);
      })
  });

});
