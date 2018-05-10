var room;

function enableButtons() {
  $("#post").prop('disabled', true);
  $("#put").prop('disabled', false);
  $("#delete").prop('disabled', false);
  $("#get").prop('disabled', false);
}

function disableButtons() {
  $("#post").prop('disabled', false);
  $("#put").prop('disabled', true);
  $("#delete").prop('disabled', true);
  $("#get").prop('disabled', true);
}

$(document).ready(function() {
  $("#post").on("click", function() {
    var index = Math.floor(Math.random() * (999 - 1) + 1)
    room = new api.model.room(null, "kitchen " + index, "{ size: \"9m2\" }");

    api.room.add(room)
      .done((data, textStatus, jqXHR) => {
        room.id = data.room.id;
        $("#result").val(JSON.stringify(data, null, 2));
        enableButtons();
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
        enableButtons();
      })
      .fail((jqXHR, textStatus, errorThrown) => {
        $("#result").val("Request failed: " + jqXHR.responseText);
      })
  });

  $("#delete").on("click", function() {
    api.room.delete(room.id)
      .done((data, textStatus, jqXHR) => {
        $("#result").val(JSON.stringify(data, null, 2));
        disableButtons();
      })
      .fail((jqXHR, textStatus, errorThrown) => {
        $("#result").val("Request failed: " + jqXHR.responseText);
      })
  });

  $("#get").on("click", function() {
    api.room.get(room.id)
      .done((data, textStatus, jqXHR) => {
        $("#result").val(JSON.stringify(data, null, 2));
        enableButtons();
      })
      .fail((jqXHR, textStatus, errorThrown) => {
        $("#result").val("Request failed: " + jqXHR.responseText);
      })
  });

  disableButtons();
});
