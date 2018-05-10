Vue.component('devices', {

})

var app = new Vue({
	el: '#app',
	data: {
		deviceQty: 0,
		deviceList: []
	},
	methods: {
		addDevice: function() {
			var deviceName = document.getElementById("deviceName").value;
			var deviceType = document.getElementById("deviceType").value;
			this.deviceList.push({ name: deviceName, type: deviceType });
			this.deviceQty++;
		}
	}
})