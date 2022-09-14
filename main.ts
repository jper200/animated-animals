basic.forever(function () {
    basic.showIcon(IconNames.Duck)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . # # . .
        # # # . .
        . # # # #
        . # # # .
        `)
    basic.pause(200)
})
