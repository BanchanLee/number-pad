enum RadioMessage {
    message1 = 49434
}
pins.digitalWritePin(DigitalPin.P2, 1)
pins.digitalWritePin(DigitalPin.P11, 1)
pins.digitalWritePin(DigitalPin.P8, 1)
pins.digitalWritePin(DigitalPin.P5, 1)
pins.setPull(DigitalPin.P16, PinPullMode.PullDown)
pins.setPull(DigitalPin.P15, PinPullMode.PullDown)
pins.setPull(DigitalPin.P14, PinPullMode.PullDown)
pins.setPull(DigitalPin.P13, PinPullMode.PullDown)
basic.forever(function () {
    control.waitForEvent(pins.digitalReadPin(DigitalPin.P2), 1)
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        basic.showIcon(IconNames.Yes)
        control.waitForEvent(pins.digitalReadPin(DigitalPin.P8), 1)
        if (pins.digitalReadPin(DigitalPin.P8) == 1) {
            basic.showIcon(IconNames.Yes)
            control.waitForEvent(pins.digitalReadPin(DigitalPin.P8), 1)
            if (pins.digitalReadPin(DigitalPin.P8) == 1) {
                basic.showIcon(IconNames.Yes)
                control.waitForEvent(pins.digitalReadPin(DigitalPin.P8), 1)
                if (pins.digitalReadPin(DigitalPin.P8) == 1) {
                    basic.showIcon(IconNames.Yes)
                    control.waitForEvent(pins.digitalReadPin(DigitalPin.P2), 1)
                    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
                        basic.showIcon(IconNames.Yes)
                        servos.P0.setAngle(90)
                    } else {
                        basic.showIcon(IconNames.No)
                    }
                } else {
                    basic.showIcon(IconNames.No)
                }
            } else {
                basic.showIcon(IconNames.No)
            }
        } else {
            basic.showIcon(IconNames.No)
        }
    } else {
        basic.showIcon(IconNames.No)
    }
})
