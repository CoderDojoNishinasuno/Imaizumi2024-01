input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . # . #
        # # # # #
        # . # . .
        . # . # .
        # . . # .
        `)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Duck)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        # . # . .
        # # # # #
        . . # . #
        . # . # .
        . # . . #
        `)
})
input.onSound(DetectedSound.Loud, function () {
    basic.showNumber(99999)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . # . .
            # # # # #
            . . # . .
            . # . # .
            . # . # .
            `)
        basic.showLeds(`
            # . # . #
            # # # # #
            . . # . .
            # # . # #
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            # # # # #
            . . # . .
            . # . # .
            . # . # .
            `)
        basic.showLeds(`
            . . # . #
            # # # # #
            # . # . .
            . # . # .
            # . . # .
            `)
        basic.showLeds(`
            . . # . .
            # # # # #
            . . # . .
            . # . # .
            . # . # .
            `)
        basic.showLeds(`
            # . # . .
            # # # # #
            . . # . #
            . # . # .
            . # . . #
            `)
        basic.showLeds(`
            . . # . .
            # # # # #
            . . # . .
            . # . # .
            . # . # .
            `)
        basic.showLeds(`
            . . # . .
            # # # # #
            # . # . #
            . # . # .
            . # . # .
            `)
        basic.showLeds(`
            . . # . .
            # # # # #
            . . # . .
            . # . # .
            . # . # .
            `)
    }
})
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
