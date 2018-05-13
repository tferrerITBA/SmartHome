var device;

$(document).ready(function() {
  api.device.getAll()
    .done((data, textStatus, jqXHR) => {
      var index;
      for(index = 0; index < data.devices.length; index++){
        // console.log(data.devices[index].id);
      }
    })
    .fail((jqXHR, textStatus, errorThrown) => {
      console.log(jqXHR.responseText);
    })

  $(function(){
    $('button').click(function(){
      console.log($(this).attr('id'));
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
