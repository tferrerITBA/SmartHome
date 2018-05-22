$(document).ready(function() {

	var queryString = decodeURIComponent(window.location.search);
  	queryString = queryString.substring(1);
  	var queries = queryString.split("=");

	api.device.get(queries[1])
    .done(function(data, textStatus, jqXHR) {
      	device = data.device;
      	$(".title").append(device.name);
      	$("#name").val(device.name);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
      	console.log(jqXHR.responseText);
    });

    $("#cancelModify").on("click", function() {
        api.device.get(queries[1])
	        .done(function(data, textStatus, jqXHR) {
	          	device = data.device;
	          	var queryString = "?id=" + device.id;
	          	if(device.typeId === acId) {
	            	window.location.href = "ac/ac.html" + queryString;
	          	} else if(device.typeId === blindId) {
	         		window.location.href = "blinds/blinds.html" + queryString;
	          	} else if(device.typeId === doorId) {
	            	window.location.href = "door/door.html" + queryString;
	          	} else if(device.typeId === lampId) {
	            	window.location.href = "lamp/lamp.html" + queryString;
	          	} else if (device.typeId === ovenId) {
	            	window.location.href = "oven/oven.html" + queryString;
	          	} else if (device.typeId === refriId) {
	            	window.location.href = "refrigerator/refrigerator.html" + queryString;
	          	}
	        })
	        .fail(function(jqXHR, textStatus, errorThrown) {
	          	console.log(jqXHR.responseText);
	        });
    });

    $("#saveModify").on("click", function() {
        api.device.get(queries[1])
	        .done(function(data, textStatus, jqXHR) {
	        	device = data.device;
	        	var name = $("#name").val();;
    			if (name !== "") {
      				device.name = name;
      				api.device.modify(device, device.id)
      					.done(function(data, textStatus, jqXHR) {
        					var queryString = "?id=" + device.id;
				          	if(device.typeId === acId) {
				            	window.location.href = "ac/ac.html" + queryString;
				          	} else if(device.typeId === blindId) {
				         		window.location.href = "blinds/blinds.html" + queryString;
				          	} else if(device.typeId === doorId) {
				            	window.location.href = "door/door.html" + queryString;
				          	} else if(device.typeId === lampId) {
				            	window.location.href = "lamp/lamp.html" + queryString;
				          	} else if (device.typeId === ovenId) {
				            	window.location.href = "oven/oven.html" + queryString;
				          	} else if (device.typeId === refriId) {
				            	window.location.href = "refrigerator/refrigerator.html" + queryString;
				          	}
	        			})
	        			.fail(function(jqXHR, textStatus, errorThrown) {
	          				console.log(jqXHR.responseText);
	        			})
      			} else {
      				// Mostrar error
      			}
      		})
      		.fail(function(jqXHR, textStatus, errorThrown) {
        		console.log(jqXHR.responseText);
      		})	          	
    });
});