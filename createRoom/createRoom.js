var room;

$(document).ready(function() {
  $("#createRoom").on("click", function() {
    var name = $("#roomName").val();
    var icon = $('input[name="icon"]:checked').val();
    var meta = "{ icon: " + icon + " }";
    room = new api.model.room(null, name, meta);
    api.room.add(room)
      .done((data, textStatus, jqXHR) => {
        room.id = data.room.id;
        window.location.href = "../rooms.html";
      })
      .fail((jqXHR, textStatus, errorThrown) => {
        console.log(jqXHR.responseText);
        var str = JSON.stringify(jqXHR.responseText, null, 2);
        var errorMessage = "";
        str = str.replace(/(?:\\[rn])+/g, "");
        str = str.replace(/[^\w\s]/gi, '');
        if(str.indexOf('name is required') >= 0) {
          errorMessage = errorMessage.concat("A name is required; ");
        }
        if(str.indexOf('fails to match the required pattern') >= 0) {
          errorMessage = errorMessage.concat("Enter alphanumeric characters only; ");
        }
        if(str.indexOf('length must be') >= 0) {
          errorMessage = errorMessage.concat("Please enter between 3 and 60 characters; ");
        }
        if(errorMessage != "")
          $("#input-error").text(errorMessage);
        else
          $("#input-error").text(str);
      })
  });

});
