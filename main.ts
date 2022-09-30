input.onButtonPressed(Button.A, function () {
    if (state == 0) {
        position += 1
        position = position % 5
        radio.setGroup(radio_group[position])
        basic.showString("" + (title_screen[position]))
    } else if (state == 1) {
        position += 1
        position = position % 3
        if (position == 0) {
            basic.clearScreen()
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
        } else if (position == 1) {
            basic.clearScreen()
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
        } else if (position == 2) {
            basic.clearScreen()
            basic.showLeds(`
                # # . . #
                # # . # .
                . . # . .
                # # . # .
                # # . . #
                `)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("" + (choice[position]))
    state += 1
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    if (state == 0) {
        basic.showIcon(IconNames.Yes)
        basic.clearScreen()
        state += 1
    }
})
// NOTES FOR NEXT CLASS:
// Setting choices to select either rock paper or scissors then show symbol for players choice
let choice: string[] = []
let title_screen: string[] = []
let radio_group: number[] = []
let state = 0
let position = 0
position = 0
state = 0
state = [
0,
1,
2,
3,
4
]
radio_group = [
202,
203,
204,
205,
206
]
title_screen = [
"GROUP",
"SOLO1",
"SOLO2",
"SOLO3",
"SOLO4"
]
choice = ["R", "P", "S"]
basic.forever(function () {
    while (state == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
