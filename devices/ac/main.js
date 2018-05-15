var state;

// "result": {
//   "status": "off",
//   "temperature": 24,
//   "mode": "cool",
//   "verticalSwing": "auto",
//   "horizontalSwing": "auto",
//   "fanSpeed": "auto"
// }

$(document).ready(function() {
  api.device.executeAction(device.id, "getState")
    .done((data, textStatus, jqXHR) => {
      state = data.result;
      if (state.status === "off") {
        $('#power').prop('checked', false);
      } else {
        $('#power').prop('checked', true);
      }
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
});
