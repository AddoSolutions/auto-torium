import BasicDriver from '/lib/BasicDriver';
import Types from '/lib/Types';

export default class SomeSerialDevice extends BasicDriver{

	/**
	 * Registers what this particular device is capable of
	 */
	registerAbilities(){

		// Power Button
		this.registerAbility(Types.Button, {
			name:"Power",
			press: function(){
				// Send Serial Command Here
			}
		})


		// Brightness
		this.registerAbility(Types.Button, {
			name:"Brightness",
			min: 1,
			max: 100,
			change: function(newValue){
				// Send Serial Command Here
			}
		})

	}

}