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

  $("#post").on("click", function() {
    var name = $("#name").val();
    room = new api.model.room(null, name, "{}");

    api.room.add(room)
      .done((data, textStatus, jqXHR) => {
        room.id = data.room.id;
        console.log(data);
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
