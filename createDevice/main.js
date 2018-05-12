var device;

$(document).ready(function() {
  api.deviceType.getTypes()
    .done((data, textStatus, jqXHR) => {
      console.log(data);
    })
    .fail((jqXHR, textStatus, errorThrown) => {
      console.log(jqXHR.responseText);
    })
});
