let batterytype = 0
let radiotype = ""
radio.setGroup(1)
let radio2 = radiotype.includes("" + pins.digitalReadPin(DigitalPin.P0) + pins.digitalReadPin(DigitalPin.P1))
datalogger.log(datalogger.createCV("radio", 50))
basic.showString("" + (batterytype))
basic.forever(function () {
    radio.raiseEvent(
    EventBusSource.MICROBIT_ID_IO_P4,
    EventBusValue.MICROBIT_EVT_ANY
    )
})
