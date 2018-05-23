var room;

$(document).ready(function() {

	var queryString = decodeURIComponent(window.location.search);
  	queryString = queryString.substring(1);
  	var queries = queryString.split("=");

	api.room.get(queries[1])
    .done(function(data, textStatus, jqXHR) {
      	room = data.room;
      	$(".title").append(room.name);
      	$("#name").val(room.name);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
      	console.log(jqXHR.responseText);
    });

    $("#cancelModify").on("click", function() {
      	queryString = "?id=" + room.id;
       	window.location.href = "room/room.html" + queryString;
    });

    $("#saveModify").on("click", function() {
    	var name = $("#name").val();;
		room.name = name;
		api.room.modify(room, room.id)
			.done(function(data, textStatus, jqXHR) {
				queryString = "?id=" + room.id;
				window.location.href = "room/room.html" + queryString;
			})
			.fail(function(jqXHR, textStatus, errorThrown) {
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
	})          	

});