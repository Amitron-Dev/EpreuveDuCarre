input.onButtonPressed(Button.A, function () {
    tours = tours + 1
    basic.showNumber(tours)
})
input.onButtonPressed(Button.AB, function () {
    tours = 0
    basic.showNumber(tours)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index < tours; index++) {
        for (let index = 0; index < 4; index++) {
            basic.showNumber(tours)
            Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, 60)
            Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Forward, 60)
            basic.pause(1000)
            Kitronik_Move_Motor.stop()
            Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Forward, 40)
            basic.pause(500)
        }
    }
})
let tours = 0
