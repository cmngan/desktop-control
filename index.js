var robot = require("robotjs");

function moveMouseExample() {
	// Speed up the mouse.
	robot.setMouseDelay(2);
	
	var twoPI = Math.PI * 2.0;
	var screenSize = robot.getScreenSize();
	var height = (screenSize.height / 2) - 10;
	var width = screenSize.width;
	
	for (var x = 0; x < width; x++)
	{
		y = height * Math.sin((twoPI * x) / width) + height;
		robot.moveMouse(x, y);
	}
}
function keyPress(key) {
	// Type "Hello World".
	//robot.typeString("Hello World");

	// Press enter.
	// audio_mute, audio_vol_down
	robot.keyTap(key);
}
function keyPressMultiple(key, time = 1) {
	new Array(time).fill(0).forEach(_=>
		robot.keyTap(key)
	)
}
module.exports = {
	moveMouseExample, keyPress, keyPressMultiple
}
