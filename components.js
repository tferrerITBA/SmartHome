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

Vue.component('ac', {props: [],
template:
	`<div id="" name="ac" class="device-action-display ac">
	    <div class="routine-action">
	      <h3 class="routine-action-text" id="" name="on-text">Off</h3>
	      <label class="switch" id="">
	          <input type="checkbox" id="on-switch"/>
	          <span class="switch-slider"></span>
	      </label>
	    </div>
	    <div class="routine-action">
	      <h3 class="routine-action-text">Set temperature (<sup>o</sup>C)</h3>
	      <div class="counter" id="">
	          <button class="counter-button" type="button" id="acminus">
	            <img class="counter-button-icon" src="../assets/MinusButton.png" alt="increment"/>
	          </button>
	        	<input id="" class="counter-input" name="quantity" value="25" readonly>
	          <button class="counter-button" type="button" id="acplus">
	            <img class="counter-button-icon" src="../assets/PlusButton.png" alt="decrement"/>
	          </button>
	      </div>
	    </div>
	    <div class="routine-action">
	      <h3 class="routine-action-text">Set mode</h3>
	      <form class="radio-selection" id="" name="mode-form">
	        <div class="radio-button" id="">
	          <input id="cool" type="radio" name="mode" value="cool">
	          <p class="radio-button-text ac-align">Cool</p>
	        </div>
	        <div class="radio-button" id="">
	          <input id="heat" type="radio" name="mode" value="heat">
	          <p class="radio-button-text ac-align">Heat</p>
	        </div>
	        <div class="radio-button" id="">
	          <input id="fan" type="radio" name="mode" value="fan">
	          <p class="radio-button-text ac-align">Fan</p>
	        </div>
	      </form>
	    </div>
	    <div class="routine-action">
	      <h3 class="routine-action-text">Set vertical swing</h3>
	      <form class="radio-selection" id="" name="v-swing-form">
	        <div class="radio-button" id="">
	          <input id="vSwingauto" type="radio" name="v-swing" value="auto">
	          <p class="radio-button-text ac-align">Auto</p>
	        </div>
	        <div class="radio-button" id="">
	          <input id="vSwing22" type="radio" name="v-swing" value="22">
	          <p class="radio-button-text ac-align">22<sup>o</sup></p>
	        </div>
	        <div class="radio-button" id="">
	          <input id="vSwing45" type="radio" name="v-swing" value="45">
	          <p class="radio-button-text ac-align">45<sup>o</sup></p>
	        </div>
	        <div class="radio-button" id="">
	          <input id="vSwing67" type="radio" name="v-swing" value="67">
	          <p class="radio-button-text ac-align">67<sup>o</sup></p>
	        </div>
	        <div class="radio-button" id="">
	          <input id="vSwing90" type="radio" name="v-swing" value="90">
	          <p class="radio-button-text ac-align">90<sup>o</sup></p>
	        </div>
	      </form>
	    </div>
	    <div class="routine-action">
	      <h3 class="routine-action-text">Set horizontal swing</h3>
	      <form class="radio-selection" id="" name="h-swing-form">
	        <div class="radio-button" id="">
	          <input id="hSwingauto" type="radio" name="h-swing" value="auto">
	          <p class="radio-button-text ac-align">Auto</p>
	        </div>
	        <div class="radio-button" id="">
	          <input id="hSwing-90" type="radio" name="h-swing" value="-90">
	          <p class="radio-button-text ac-align">-90<sup>o</sup></p>
	        </div>
	        <div class="radio-button" id="">
	          <input id="hSwing-45" type="radio" name="h-swing" value="-45">
	          <p class="radio-button-text ac-align">-45<sup>o</sup></p>
	        </div>
	        <div class="radio-button" id="">
	          <input id="hSwing0" type="radio" name="h-swing" value="0">
	          <p class="radio-button-text ac-align">0<sup>o</sup></p>
	        </div>
	        <div class="radio-button" id="">
	          <input id="hSwing45" type="radio" name="h-swing" value="45">
	          <p class="radio-button-text ac-align">45<sup>o</sup></p>
	        </div>
	        <div class="radio-button" id="">
	          <input id="hSwing90" type="radio" name="h-swing" value="90">
	          <p class="radio-button-text ac-align">90<sup>o</sup></p>
	        </div>
	      </form>
	    </div>
	    <div class="routine-action">
	      <h3 class="routine-action-text">Set fan speed</h3>
	      <form class="radio-selection" id="" name="fspeed">
	        <div class="radio-button" id="">
	          <input id="fanSpeedauto" type="radio" name="fan-speed" value="auto">
	          <p class="radio-button-text ac-align">Auto</p>
	        </div>
	        <div class="radio-button" id="">
	          <input id="fanSpeed25" type="radio" name="fan-speed" value="25">
	          <p class="radio-button-text ac-align">25<sup>o</sup></p>
	        </div>
	        <div class="radio-button" id="">
	          <input id="fanSpeed50" type="radio" name="fan-speed" value="50">
	          <p class="radio-button-text ac-align">50<sup>o</sup></p>
	        </div>
	        <div class="radio-button" id="">
	          <input id="fanSpeed75" type="radio" name="fan-speed" value="75">
	          <p class="radio-button-text ac-align">75<sup>o</sup></p>
	        </div>
	        <div class="radio-button" id="">
	          <input id="fanSpeed100" type="radio" name="fan-speed" value="100">
	          <p class="radio-button-text ac-align">100<sup>o</sup></p>
	        </div>
	      </form>
	    </div>
	</div>`
})

Vue.component('blinds', {props: [],
template:
  	`<div id="" name="blinds" class="device-action-display blinds">
  		<div class="routine-action">
    		<h3 class="routine-action-text" id="" name="open-text">Closed</h3>
    		<label class="switch" id="">
        		<input type="checkbox" id="open-switch">
        		<span class="switch-slider"></span>
    		</label>
  		</div>
  	</div>`
})

Vue.component('door', {props: [],
template:
	`<div id="" name="door" class="device-action-display door">
	  <div class="routine-action">
	    <h3 class="routine-action-text" id="" name="open-text">Closed</h3>
	    <label class="switch" id="">
	        <input type="checkbox" id="open-switch">
	        <span class="switch-slider"></span>
	    </label>
	  </div>
	  <div class="routine-action">
	    <h3 class="routine-action-text" id="" name="lock-text">Unlocked</h3>
	    <label class="switch" id="">
	        <input type="checkbox" id="lock-switch">
	        <span class="switch-slider"></span>
	    </label>
	  </div>
	</div>`
})

Vue.component('lamp', {props: [],
template:
	`<div id="" name="lamp" class="device-action-display lamp">
	  <div class="routine-action">
	    <h3 class="routine-action-text" id="" name="on-text">Off</h3>
	    <label class="switch" id="">
	        <input type="checkbox" id="on-switch"/>
	        <span class="switch-slider"></span>
	    </label>
	  </div>
	  <div class="routine-action">
	      <h3 class="routine-action-text">Set color</h3>
	      <div class="color-selection" id="">
	          <select id="color" class="color-select">
	              <option class="select-option" value="#FFFFFF">White</option>
	              <option class="select-option" value="#FFFF00">Yellow</option>
	              <option class="select-option" value="#FFA500">Orange</option>
	              <option class="select-option" value="#FF0000">Red</option>
	              <option class="select-option" value="#FF00FF">Magenta</option>
	              <option class="select-option" value="#0000FF">Blue</option>
	              <option class="select-option" value="#00FFFF">Cyan</option>
	              <option class="select-option" value="#00FF00">Lime</option>
	          </select>
	          <div id="" class="color-preview"></div>
	      </div>
	  </div>
	  <div class="routine-action">
	      <h3 class="routine-action-text">Set brightness</h3>
	      <div class="brightness">
	        <img class="small-icon" src="../assets/BrightnessIcon.png"/>
	        <div class="slider-container" id="">
	            <input type="range" min="0" max="100" value="100" class="slider" id="brightness"/>
	        </div>
	        <img class="large-icon" src="../assets/BrightnessIcon.png"/>
	      </div>
	  </div>
	</div>`
})

Vue.component('oven', {props: [],
template:
	`<div id="" name="oven" class="device-action-display oven">
	  <div class="routine-action">
	    <h3 class="routine-action-text" id="" name="on-text">Off</h3>
	    <label class="switch" id="">
	        <input type="checkbox" id="on-switch"/>
	        <span class="switch-slider"></span>
	    </label>
	  </div>
	  <div class="routine-action">
	    <h3 class="routine-action-text">Set temperature (<sup>o</sup>C)</h3>
	    <div class="oven-heat" id="">
	      <input type="range" min="90" max="230" value="90" class="slider oven" id="temperature"/>
	      <p class="oven-heat-text" id="heat-text"></p>
	    </div>
	  </div>
	  <div class="routine-action">
	    <h3 class="routine-action-text">Set heat</h3>
	    <form class="radio-selection" id="" name="heat-form">
	      <div class="radio-button" id="">
	        <input id="heatconventional" type="radio" name="heat" value="conventional">
	        <p class="radio-button-text">Conventional</p>
	      </div>
	       <div class="radio-button" id="">
	         <input id="heatbottom" type="radio" name="heat" value="bottom">
	            <p class="radio-button-text">Bottom</p>
	       </div>
	       <div class="radio-button" id="">
	         <input id="heattop" type="radio" name="heat" value="top">
	         <p class="radio-button-text">Top</p>
	       </div>
	     </form>
	  </div>
	  <div class="routine-action">
	    <h3 class="routine-action-text">Set grill</h3>
	    <form class="radio-selection" id="" name="grill-form">
	      <div class="radio-button" id="">
	        <input id="grilllarge" type="radio" name="grill" value="large">
	        <p class="radio-button-text oven-align">Large</p>
	      </div>
	       <div class="radio-button" id="">
	         <input id="grilleco" type="radio" name="grill" value="eco">
	        <p class="radio-button-text oven-align">Eco</p>
	       </div>
	       <div class="radio-button" id="">
	         <input id="grilloff" type="radio" name="grill" value="off">
	        <p class="radio-button-text oven-align">Off</p>
	      </div>
	    </form>
	  </div>
	  <div class="routine-action">
	    <h3 class="routine-action-text">Set convection</h3>
	    <form class="radio-selection" id="" name="conv-form">
	      <div class="radio-button" id="">
	        <input  id="convnormal" type="radio" name="convection" value="normal">
	        <p class="radio-button-text oven-align">Normal</p>
	      </div>
	     <div class="radio-button" id="">
	       <input id="conveco" type="radio" name="convection" value="eco">
	      <p class="radio-button-text oven-align">Eco</p>
	     </div>
	     <div class="radio-button" id="">
	       <input id="convoff" type="radio" name="convection" value="off">
	      <p class="radio-button-text oven-align">Off</p>
	     </div>
	   </form>
	  </div>
	</div>`
})

Vue.component('refrigerator', {props: [],
template:
	`<div id="" name="refrigerator" class="device-action-display refrigerator">
	  <div class="routine-action">
	    <h3 class="routine-action-text">Set temperature (<sup>o</sup>C)</h3>
	    <div class="counter" id="">
	        <button class="counter-button" type="button" id="minus">
	          <img class="counter-button-icon" src="../assets/MinusButton.png" alt="increment"/>
	        </button>
	      	<input id="" class="counter-input" name="quantity" value="2" readonly/>
	        <button class="counter-button" type="button" id="plus">
	          <img class="counter-button-icon" src="../assets/PlusButton.png" alt="decrement"/>
	        </button>
	    </div>
	  </div>
	  <div class="routine-action">
	    <h3 class="routine-action-text">Set freezer temperature (<sup>o</sup>C)</h3>
	    <div class="counter" id="">
	        <button class="counter-button" type="button" id="freezMinus">
	          <img class="counter-button-icon" src="../assets/MinusButton.png" alt="increment"/>
	        </button>
	      	<input id="" class="counter-input" name="freez-quantity" value="-8" readonly/>
	        <button class="counter-button" type="button" id="freezPlus">
	          <img class="counter-button-icon" src="../assets/PlusButton.png" alt="decrement"/>
	        </button>
	    </div>
	  </div>
	  <div class="routine-action">
	    <h3 class="routine-action-text">Set mode</h3>
	    <form class="radio-selection" id="" name="mode-form">
	      <div class="radio-button" id="">
	        <input id="default" type="radio" name="mode" value="default"/>
	        <p class="radio-button-text">Default</p>
	      </div>
	      <div class="radio-button" id="">
	        <input id="vacation" type="radio" name="mode" value="vacation"/>
	        <p class="radio-button-text">Vacation</p>
	      </div>
	      <div class="radio-button" id="">
	        <input id="party" type="radio" name="mode" value="party"/>
	        <p class="radio-button-text">Party</p>
	      </div>
	    </form>
	  </div>
	</div>`
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
		deleteDevice() {
			api.device.delete(device.id)
        	.done(function(data, textStatus, jqXHR) {
          		window.location.href = "../../devices.html";
        	})
        	.fail(function(jqXHR, textStatus, errorThrown) {
          		console.log(jqXHR.responseText);
        	})
		},
		deleteRoom() {
			api.room.getDevices(room.id)
		        .done(function(data, textStatus, jqXHR) {
		          	var roomDevices = data.devices;
		          	api.room.delete(room.id)
        				.done(function(data, textStatus, jqXHR) {
        					roomDevices.forEach(function(device) {
					            var fav = device.meta.split("favorite: ")[1].split(" }")[0];
					            device.meta = "{ hasRoom: false, favorite: " + fav + "}";
					            api.device.modify(device, device.id)
					                .done(function(data, textStatus, jqXHR) {

					                })
					                .fail(function(jqXHR, textStatus, errorThrown) {
					                    console.log(jqXHR.responseText);
					                })
		        			})
		        			window.location.href = "../../rooms.html";
        				})
			        	.fail(function(jqXHR, textStatus, errorThrown) {
			          		console.log(jqXHR.responseText);
			        	})
		        })
		        .fail(function(jqXHR, textStatus, errorThrown) {
		          	console.log(jqXHR.responseText);
		        });
		},
		deleteRoutine() {
			api.routine.delete(routine.id)
        	.done(function(data, textStatus, jqXHR) {
          		window.location.href = "../../routines.html";
        	})
        	.fail(function(jqXHR, textStatus, errorThrown) {
          		console.log(jqXHR.responseText);
        	});
		}
	}
})
