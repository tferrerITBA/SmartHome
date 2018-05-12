var routine;

$(document).ready(function() {
  api.routines.getAll()
      .done((data, textStatus, jqXHR) => {
        var index;
        for(index = 0; index < data.routines.length; index++){
          console.log(data.routines[index].id);
        }
      })
      .fail((jqXHR, textStatus, errorThrown) => {
        console.log(jqXHR.responseText);
      })

  $("#post").on("click", function() {
    var index = Math.floor(Math.random() * (999 - 1) + 1)
    room = new api.model.room(null, "kitchen " + index, "{ size: \"9m2\" }");

    api.room.add(room)
      .done((data, textStatus, jqXHR) => {
        room.id = data.room.id;
        $("#result").val(JSON.stringify(data, null, 2));
      })
      .fail((jqXHR, textStatus, errorThrown) => {
        $("#result").val("Request failed: " + jqXHR.responseText);
      })
  });

  $("#put").on("click", function() {
    room.meta = "{ size: \"6m2\" }";

    api.room.modify(room)
      .done((data, textStatus, jqXHR) => {
        $("#result").val(JSON.stringify(data, null, 2));
      })
      .fail((jqXHR, textStatus, errorThrown) => {
        $("#result").val("Request failed: " + jqXHR.responseText);
      })
  });

  $("#delete").on("click", function() {
    api.room.delete(room.id)
      .done((data, textStatus, jqXHR) => {
        $("#result").val(JSON.stringify(data, null, 2));
      })
      .fail((jqXHR, textStatus, errorThrown) => {
        $("#result").val("Request failed: " + jqXHR.responseText);
      })
  });

  $("#get").on("click", function() {
    api.room.get(room.id)
      .done((data, textStatus, jqXHR) => {
        $("#result").val(JSON.stringify(data, null, 2));
      })
      .fail((jqXHR, textStatus, errorThrown) => {
        $("#result").val("Request failed: " + jqXHR.responseText);
      })
  });

});
