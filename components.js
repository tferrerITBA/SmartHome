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

Vue.component('app-header', {props: ['home', 'devices', 'rooms', 'routines'],
template:
	`<div class="nav" id="app-header">
	    <a class="logo" v-bind:href="home"></a>
	    <div>
		    <a class="nav-link" v-bind:href="home">Home</a>
		    <a class="nav-link" v-bind:href="devices">Devices</a>
		    <a class="nav-link" v-bind:href="rooms">Rooms</a>
		    <a class="nav-link" v-bind:href="routines">Routines</a>
	    </div>
    </div>`
})

var VueInstance = new Vue({
	el: '#app',
	data: {
		deviceList: [],
		linkList: []
	},
	methods: {
		addDevice: function(name, subtext, imgSrc, id) {
			this.deviceList.push({ name: name, subtext: subtext, img: imgSrc, id: id });
		},
		addLink: function(home, devices, rooms, routines) {
			this.linkList.push({ home: home, devices: devices, rooms: rooms, routines: routines });
		}
	},
})
