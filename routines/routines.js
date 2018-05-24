$(document).ready(function() {
  api.routine.getAll()
    .done(function(data, textStatus, jqXHR) {
      data.routines.forEach(function(routine){
        var name = routine.name;
        var icon = "assets/gear.png";
        var id = routine.id;
        VueInstance.addItem(name, "" , icon, id);
      })
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
      console.log(jqXHR.responseText);
    })

  $(".instances").on("click", "button", function() {
    var id = $(this).attr('id');
    var queryString = "?id=" + id;
    window.location.href = "routines/routine/routine.html" + queryString;
  });
});
