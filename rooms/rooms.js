var room;

$(document).ready(function() {
  api.room.getAll()
      .done((data, textStatus, jqXHR) => {
        var index;
        for(index = 0; index < data.rooms.length; index++){
          // mostrar rooms con el componente
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

});
