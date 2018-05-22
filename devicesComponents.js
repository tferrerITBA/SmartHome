Vue.component('AirConditioner', {props: ['id'],
template:
	`
  <div v-bind:id="id">
    <div class="action">
      <h3 class="action-text" id="on-status">Off</h3>
      <label class="switch">
          <input type="checkbox" id="on-switch"/>
          <span class="switch-slider"></span>
      </label>
    </div>
    <div class="action">
      <h3 class="action-text">Set temperature (<sup>o</sup>C)</h3>
      <div class="counter">
          <button class="counter-button" type="button" id="minus">
            <img class="counter-button-icon" src="../../assets/MinusButton.png" alt="increment"/>
          </button>
        <input class="counter-input" name="quantity" value="25" readonly>
          <button class="counter-button" type="button" id="plus">
            <img class="counter-button-icon" src="../../assets/PlusButton.png" alt="decrement"/>
          </button>
      </div>
    </div>
    <div class="action">
      <h3 class="action-text">Set mode</h3>
      <form class="radio-selection">
        <div class="radio-button">
          <input id="cool" type="radio" name="mode" value="cool">
          <p class="radio-button-text ac-align">Cool</p>
        </div>
        <div class="radio-button">
          <input id="heat" type="radio" name="mode" value="heat">
          <p class="radio-button-text ac-align">Heat</p>
        </div>
        <div class="radio-button">
          <input id="fan" type="radio" name="mode" value="fan">
          <p class="radio-button-text ac-align">Fan</p>
        </div>
      </form>
    </div>
    <div class="action">
      <h3 class="action-text">Set vertical swing</h3>
      <form class="radio-selection">
        <div class="radio-button">
          <input id="vSwingauto" type="radio" name="v-swing" value="auto">
          <p class="radio-button-text ac-align">Auto</p>
        </div>
        <div class="radio-button">
          <input id="vSwing22" type="radio" name="v-swing" value="22">
          <p class="radio-button-text ac-align">22<sup>o</sup></p>
        </div>
        <div class="radio-button">
          <input id="vSwing45" type="radio" name="v-swing" value="45">
          <p class="radio-button-text ac-align">45<sup>o</sup></p>
        </div>
        <div class="radio-button">
          <input id="vSwing67" type="radio" name="v-swing" value="67">
          <p class="radio-button-text ac-align">67<sup>o</sup></p>
        </div>
        <div class="radio-button">
          <input id="vSwing90" type="radio" name="v-swing" value="90">
          <p class="radio-button-text ac-align">90<sup>o</sup></p>
        </div>
      </form>
    </div>
    <div class="action">
      <h3 class="action-text">Set horizontal swing</h3>
      <form class="radio-selection">
        <div class="radio-button">
          <input id="hSwingauto" type="radio" name="h-swing" value="auto">
          <p class="radio-button-text ac-align">Auto</p>
        </div>
        <div class="radio-button">
          <input id="hSwing-90" type="radio" name="h-swing" value="-90">
          <p class="radio-button-text ac-align">-90<sup>o</sup></p>
        </div>
        <div class="radio-button">
          <input id="hSwing-45" type="radio" name="h-swing" value="-45">
          <p class="radio-button-text ac-align">-45<sup>o</sup></p>
        </div>
        <div class="radio-button">
          <input id="hSwing0" type="radio" name="h-swing" value="0">
          <p class="radio-button-text ac-align">0<sup>o</sup></p>
        </div>
        <div class="radio-button">
          <input id="hSwing45" type="radio" name="h-swing" value="45">
          <p class="radio-button-text ac-align">45<sup>o</sup></p>
        </div>
        <div class="radio-button">
          <input id="hSwing90" type="radio" name="h-swing" value="90">
          <p class="radio-button-text ac-align">90<sup>o</sup></p>
        </div>
      </form>
    </div>
    <div class="action">
      <h3 class="action-text">Set fan speed</h3>
      <form class="radio-selection">
        <div class="radio-button">
          <input id="fanSpeedauto" type="radio" name="fan-speed" value="auto">
          <p class="radio-button-text ac-align">Auto</p>
        </div>
        <div class="radio-button">
          <input id="fanSpeed25" type="radio" name="fan-speed" value="25">
          <p class="radio-button-text ac-align">25<sup>o</sup></p>
        </div>
        <div class="radio-button">
          <input id="fanSpeed50" type="radio" name="fan-speed" value="50">
          <p class="radio-button-text ac-align">50<sup>o</sup></p>
        </div>
        <div class="radio-button">
          <input id="fanSpeed75" type="radio" name="fan-speed" value="75">
          <p class="radio-button-text ac-align">75<sup>o</sup></p>
        </div>
        <div class="radio-button">
          <input id="fanSpeed100" type="radio" name="fan-speed" value="100">
          <p class="radio-button-text ac-align">100<sup>o</sup></p>
        </div>
      </form>
    </div>
  </div>
  `})


  Vue.component('Blinds', {props: ['id'],
  template:
  	`
  <div class="action" v-bind:id="id">
    <h3 class="action-text" id="open-status">Closed</h3>
    <label class="switch">
        <input type="checkbox" id="open-switch">
        <span class="switch-slider"></span>
    </label>
  </div>
  `})


Vue.component('Door', {props: ['id'],
template:
`
<div v-bind:id="id">
  <div class="action">
    <h3 class="action-text" id="open-status">Closed</h3>
    <label class="switch">
        <input type="checkbox" id="open-switch">
        <span class="switch-slider"></span>
    </label>
  </div>
  <div class="action">
    <h3 class="action-text" id="lock-status">Unlocked</h3>
    <label class="switch">
        <input type="checkbox" id="lock-switch">
        <span class="switch-slider"></span>
    </label>
  </div>
</div>
`})


Vue.component('Lamp', {props: ['id'],
template:
`
<div v-bind:id="id">
  <div class="action">
    <h3 class="action-text" id="on-status">Off</h3>
    <label class="switch">
        <input type="checkbox" id="on-switch"/>
        <span class="switch-slider"></span>
    </label>
  </div>
  <div class="action">
      <h3 class="action-text">Set color</h3>
      <div class="color-selection">
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
          <div class="color-preview"></div>
      </div>
  </div>
  <div class="action">
      <h3 class="action-text">Set brightness</h3>
      <div class="brightness">
        <img class="small-icon" src="../../assets/BrightnessIcon.png"/>
        <div class="slider-container">
            <input type="range" min="0" max="100" value="100" class="slider" id="brightness"/>
        </div>
        <img class="large-icon" src="../../assets/BrightnessIcon.png"/>
      </div>
  </div>
</div>
`})


Vue.component('Oven', {props: ['id'],
template:
`
<div v-bind:id="id">
  <div class="action">
    <h3 class="action-text" id="on-status">Off</h3>
    <label class="switch">
        <input type="checkbox" id="on-switch"/>
        <span class="switch-slider"></span>
    </label>
  </div>
  <div class="action">
    <h3 class="action-text">Set temperature (<sup>o</sup>C)</h3>
    <div class="oven-heat">
              <input type="range" min="90" max="230" value="90" class="slider oven" id="temperature"/>
      <p class="oven-heat-text" id="heat-text"></p>
    </div>
  </div>
  <div class="action">
    <h3 class="action-text">Set heat</h3>
    <form class="radio-selection">
      <div class="radio-button">
        <input id="heatconventional" type="radio" name="heat" value="conventional">
        <p class="radio-button-text">Conventional</p>
      </div>
         <div class="radio-button">
           <input id="heatbottom" type="radio" name="heat" value="bottom">
              <p class="radio-button-text">Bottom</p>
         </div>
         <div class="radio-button">
           <input id="heattop" type="radio" name="heat" value="top">
           <p class="radio-button-text">Top</p>
         </div>
       </form>
  </div>
  <div class="action">
    <h3 class="action-text">Set grill</h3>
    <form class="radio-selection">
      <div class="radio-button">
        <input id="grilllarge" type="radio" name="grill" value="large">
        <p class="radio-button-text oven-align">Large</p>
      </div>
       <div class="radio-button">
         <input id="grilleco" type="radio" name="grill" value="eco">
        <p class="radio-button-text oven-align">Eco</p>
       </div>
       <div class="radio-button">
         <input id="grilloff" type="radio" name="grill" value="off">
        <p class="radio-button-text oven-align">Off</p>
      </div>
    </form>
  </div>
  <div class="action">
    <h3 class="action-text">Set convection</h3>
    <form class="radio-selection">
      <div class="radio-button">
        <input  id="convnormal" type="radio" name="convection" value="normal">
        <p class="radio-button-text oven-align">Normal</p>
      </div>
     <div class="radio-button">
       <input id="conveco" type="radio" name="convection" value="eco">
      <p class="radio-button-text oven-align">Eco</p>
     </div>
     <div class="radio-button">
       <input id="convoff" type="radio" name="convection" value="off">
      <p class="radio-button-text oven-align">Off</p>
     </div>
   </form>
  </div>
</div>
`})


Vue.component('Refrigerator', {props: ['id'],
template:
`
<div v-bind:id="id">
  <div class="action">
    <h3 class="action-text">Set temperature (<sup>o</sup>C)</h3>
    <div class="counter">
        <button class="counter-button" type="button" id="minus">
          <img class="counter-button-icon" src="../../assets/MinusButton.png" alt="increment"/>
        </button>
      <input class="counter-input" name="quantity" value="2" readonly/>
        <button class="counter-button" type="button" id="plus">
          <img class="counter-button-icon" src="../../assets/PlusButton.png" alt="decrement"/>
        </button>
    </div>
  </div>
  <div class="action">
    <h3 class="action-text">Set freezer temperature (<sup>o</sup>C)</h3>
    <div class="counter">
        <button class="counter-button" type="button" id="freezMinus">
          <img class="counter-button-icon" src="../../assets/MinusButton.png" alt="increment"/>
        </button>
      <input class="counter-input" name="freez-quantity" value="-8" readonly/>
        <button class="counter-button" type="button" id="freezPlus">
          <img class="counter-button-icon" src="../../assets/PlusButton.png" alt="decrement"/>
        </button>
    </div>
  </div>
  <div class="action">
    <h3 class="action-text">Set mode</h3>
    <form class="radio-selection">
      <div class="radio-button">
        <input id="default" type="radio" name="mode" value="default"/>
        <p class="radio-button-text">Default</p>
      </div>
      <div class="radio-button">
        <input id="vacation" type="radio" name="mode" value="vacation"/>
        <p class="radio-button-text">Vacation</p>
      </div>
      <div class="radio-button">
        <input id="party" type="radio" name="mode" value="party"/>
        <p class="radio-button-text">Party</p>
      </div>
    </form>
  </div>
</div>
`})
