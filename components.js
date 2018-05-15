Vue.component(
	'styles', {
		template: `<div>
		<link rel="stylesheet" type="text/css" href="equalizer.css"></link>
		<link rel="stylesheet" type="text/css" href="style.css"></link>
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu"/></link>
		</div>`
})

Vue.component(
	'ajaxapi',  {template:
  `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>`
})

Vue.component(
	'jsscripts', { template:
		`<div>
		<script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>
		<script src="vue.js"></script>
		<script src="components.js"></script>
		</div>`
})

var vueInstance = new Vue({
	el: '.instances',
	data: {	
	}
})

//