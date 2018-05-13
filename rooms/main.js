var room;

$(document).ready(function() {
  api.room.getAll()
      .done((data, textStatus, jqXHR) => {
        var index;
        for(index = 0; index < data.rooms.length; index++){
          console.log(data.rooms[index].id);
        }
      })
      .fail((jqXHR, textStatus, errorThrown) => {
        console.log(jqXHR.responseText);
      })

  $(function(){
    $('button').click(function(){
      console.log($(this).attr('id'));
      if (id  === undefined) {
        api.rooms.get($(this).attr('id'))
        .done((data, textStatus, jqXHR) => {
          room = data.room;
          console.log(data);
        })
        .fail((jqXHR, textStatus, errorThrown) => {
          console.log(jqXHR.responseText);
        });
      }
    });
  });

  $("#createRoom").on("click", function() {
    var name = $("#roomName").val();
    var icon = $('input[name="icon"]:checked').val();
    var meta = "{ icon: " + icon + " }";
    room = new api.model.room(null, name, meta);
    api.room.add(room)
      .done((data, textStatus, jqXHR) => {
        room.id = data.room.id;
        $("#checkboxes").children("input:checked").forEach(function() {
          api.device.addDeviceToRoom(this.id, room.id)
            .done((data, textStatus, jqXHR) => {
              console.log("Device added");
            })
            .fail((jqXHR, textStatus, errorThrown) => {
              console.log(jqXHR.responseText);
            })
        });
      })
      .fail((jqXHR, textStatus, errorThrown) => {
        console.log(jqXHR.responseText);
      })
  });

  $("#put").on("click", function() {
    room.meta = "{}";

    api.room.modify(room)
      .done((data, textStatus, jqXHR) => {
        console.log(data);
      })
      .fail((jqXHR, textStatus, errorThrown) => {
        console.log(jqXHR.responseText);
      })
  });

  $("#delete").on("click", function() {
    api.room.delete(room.id)
      .done((data, textStatus, jqXHR) => {
        console.log(data);
      })
      .fail((jqXHR, textStatus, errorThrown) => {
        console.log(jqXHR.responseText);
      })
  });

  $("#get").on("click", function() {
    api.room.get(room.id)
      .done((data, textStatus, jqXHR) => {
        console.log(data);
      })
      .fail((jqXHR, textStatus, errorThrown) => {
        console.log(jqXHR.responseText);
      })
  });

});
