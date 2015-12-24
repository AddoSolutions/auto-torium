var AnyMesh = require("./node_modules/anymesh/lib/AnyMesh.js");
var anyMesh = new AnyMesh();

anyMesh.received = function(message) {
	//message is object containing message info
	//including type, sender, target, and data
	console.log("message sent by " + message.sender);
	console.log(message.data);
}


anyMesh.connectedTo = function(info) {
	console.log('Connected to ' + info.name);

	anyMesh.publish("updates", {"update":"new headlines!", "content":[1, 5, 8]});
}
anyMesh.disconnectedFrom = function(name) {
	console.log('Disconnected from ' + name);
}

anyMesh.connect("Dave", ["events", "updates"]);

require('getmac').getMac(function(err,macAddress){
	if (err)  throw err;
	console.log("My Mac: "  + macAddress);
});