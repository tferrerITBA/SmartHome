var routine;

$(document).ready(function() {
  api.routines.getAll()
      .done((data, textStatus, jqXHR) => {
        var index;
        for(index = 0; index < data.routines.length; index++){
          //console.log(data.routines[index].id);
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

  $("#createRoutine").on("click", function() {
    var name = $("#result").val();
    routine = new api.model.room(null, name, "{}", "{}");
    var selected = $("#checkboxes").children("input:checked");
    debugger;
    api.routine.add(room)
      .done((data, textStatus, jqXHR) => {
        routine.id = data.routine.id;
        console.log(data);
      })
      .fail((jqXHR, textStatus, errorThrown) => {
        $("#result").val("Request failed: " + jqXHR.responseText);
      })
  });

  $("#put").on("click", function() {
    routine.meta = "{}";

    api.routine.modify(routine)
      .done((data, textStatus, jqXHR) => {
        console.log(data);
      })
      .fail((jqXHR, textStatus, errorThrown) => {
        console.log(jqXHR.responseText);
      })
  });

  $("#delete").on("click", function() {
    api.routine.delete(routine.id)
      .done((data, textStatus, jqXHR) => {
        console.log(data);
      })
      .fail((jqXHR, textStatus, errorThrown) => {
        console.log(jqXHR.responseText);
      })
  });

  $("#get").on("click", function() {
    api.routine.get(routine.id)
      .done((data, textStatus, jqXHR) => {
        console.log(data);
      })
      .fail((jqXHR, textStatus, errorThrown) => {
        console.log(jqXHR.responseText);
      })
  });

});
