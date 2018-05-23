Vue.component('item', {props: ['name', 'subtext', 'img', 'id', 'itemtype'],
template:
	`<button v-bind:id="id" v-bind:class="itemtype" type="button">
					<div class="item-description">
						<img class="item-icon" v-bind:src="img" v-bind:alt="itemtype"/>
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

Vue.component('modal', {props: [],
	template:
	`<transition name="modal">
		<div class="modal-mask">
		  <div class="modal-wrapper">
			<div class="modal-container">

			  <div class="modal-header">
				<slot name="header">
				  default header
				</slot>
			  </div>

			  <div class="modal-body">
				<slot name="body">
				  default body
				</slot>
			  </div>

			  <div class="modal-footer">
				<slot name="footer">
				  <button id="deleteDevice" class="modal-default-button" @click="$emit('delete')">
					<p class="modal-confirm">Yes</p>
				  </button>
				  <button class="modal-default-button" @click="$emit('close')">
				  	<p class="modal-cancel">No</p>
				  </button>
				</slot>
			  </div>
			</div>
		  </div>
		</div>
	  </transition>`
})

var VueInstance = new Vue({
	el: '#app',
	data: {
		itemList: [],
		linkList: [],
		showModal: false
	},
	methods: {
		addItem: function(name, subtext, imgSrc, id) {
			this.itemList.push({ name: name, subtext: subtext, img: imgSrc, id: id });
		},
		addLink: function(home, devices, rooms, routines) {
			this.linkList.push({ home: home, devices: devices, rooms: rooms, routines: routines });
		},
		changeModalState: function() {
			this.showModal = !this.showModal;
		},
		deleteIt() {
			api.device.delete(device.id)
        	.done(function(data, textStatus, jqXHR) {
          		window.location.href = "../../devices.html";
        	})
        	.fail(function(jqXHR, textStatus, errorThrown) {
          		console.log(jqXHR.responseText);
        	})
		}
	}
})
