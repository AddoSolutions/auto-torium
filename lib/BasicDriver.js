export default class BasicDriver{

	/**
	 * Initializes the driver and all it's core components
	 * @param app
	 */
	constructor(app, config){
		for(var i in config){
			this[i] = config[i];
		}

		this.app = app;
		this.abilities = {};

		this.registerAbilities();
	}

	/**
	 * Initializes this driver with what it needs to properly run.
	 * @param node
	 */
	static init(node){
		this.node = node;

	}

	/**
	 * @returns {*} This Node Controlelr Object
	 */
	getNode(){
		return this.constructor.getNode();
	}

	/**
	 * @returns {*} This Node Controlelr Object
	 */
	static getNode(){
		return this.node;
	}

	/**
	 * @returns {String} The name of this device type (ex. Panasonic EX567 Projector)
	 */
	static getName(){
		return "Unnamed Device Type"
	}

	/**
	 *
	 * @returns {[BasicDriver],Q.promise} Whether or not this driver is connected to the appropriate device
	 */
	static autoDiscover(){
		return [];
	}

	/**
	 * Registers what this particular device is capable of
	 */
	registerAbilities(){

	}


	/**
	 * Stores each capibility
	 * @param method
	 * @param type
	 * @param options
	 * @private
	 */
	_register(method, type, options){
		if(!this.abilities[method]) this.abilities[method] = [];

		this.abilities[method].push({
			type: type,
			options: data
		})
	}

	/**
	 * Registers something that can be done to this device
	 * @param type
	 * @param data
	 */
	registerAbility(type, data){
		this._register("ability", type, data);
	}


	/**
	 * Registers the states that this device can be in
	 * @param type
	 * @param data
	 */
	registerState(type, data){
		this._register("state", type, data);
	}

}