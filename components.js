Vue.component('item', {props: ['name', 'subtext', 'img', 'id'],
template: 
	`<button v-bind:id="id" class="device" type="button" onclick=" ">
					<div class="item-description">
						<img class="item-icon" v-bind:src="img" alt="device"/>
						<div class="item-text">
							<p class="item-name">{{name}}</p>
							<p class="item-subtext">{{subtext}}</p>
						</div>
					</div>
				</button>`})

var vueInstance = new Vue({
	el: '.instances',
	data: {	
	}
})

// $(devices.html).ready(function hola(){
// 	var items = $('<p>safsdf</p>');
// 	$('.instances').append(items);
// })
