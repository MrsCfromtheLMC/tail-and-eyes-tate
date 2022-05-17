hummingbird.startHummingbird()
basic.forever(function () {
    if (hummingbird.getSensor(SensorType.Light, ThreePort.One) < 30) {
        hummingbird.setPositionServo(FourPort.One, 0)
        hummingbird.setLED(ThreePort.One, 100)
    } else {
        hummingbird.setLED(ThreePort.One, 0)
        hummingbird.setPositionServo(FourPort.One, 180)
    }
})
basic.forever(function () {
	
})
