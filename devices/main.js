var device;

$(document).ready(function() {
  api.device.getAll()
    .done((data, textStatus, jqXHR) => {
      var index;
      for(index = 0; index < data.devices.length; index++){
        console.log(data.devices[index].id);
      }
    })
    .fail((jqXHR, textStatus, errorThrown) => {
      console.log(jqXHR.responseText);
    })

  $("#createDevice").on("click", function() {
    // var name = $("#name").val();
    // var type = $("#type").val().id;
    var name = "Cortin";
    var type = "eu0v2xgprrhhg41g";
    device = new api.model.device(null, type, name, "{}");

    api.device.add(device)
      .done((data, textStatus, jqXHR) => {
        debugger;
        room.id = data.device.id;
        console.log(data);
      })
      .fail((jqXHR, textStatus, errorThrown) => {
        console.log(jqXHR.responseText);
      })
  });

  $("#modifyDevice").on("click", function() {
    device.meta = "{ state: {}, actions: {} }";

    api.device.modify(device)
      .done((data, textStatus, jqXHR) => {
        console.log(data);
      })
      .fail((jqXHR, textStatus, errorThrown) => {
        console.log(jqXHR.responseText);
      })
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
    api.device.get(device.id)
      .done((data, textStatus, jqXHR) => {
        console.log(data);
      })
      .fail((jqXHR, textStatus, errorThrown) => {
        console.log(jqXHR.responseText);
      })
  });

});
