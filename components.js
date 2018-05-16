<<<<<<< HEAD
Vue.component('item', {props: ['name', 'subtext', 'img', 'id'],
template: 
	`<button v-bind:id="id" class="device" type="button">
					<div class="item-description">
						<img class="item-icon" v-bind:src="img" alt="device"/>
						<div class="item-text">
							<p class="item-name">{{name}}</p>
							<p class="item-subtext">{{subtext}}</p>
						</div>
					</div>
				</button>`})

var VueInstance = new Vue({
	el: '#app',
	data: {
		deviceList: []
	},
	methods: {
		addDevice: function(name, subtext, imgSrc, id) {
			this.deviceList.push({ name: name, subtext: subtext, img: imgSrc, id: id });
		}
	}
})
=======
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
>>>>>>> master
