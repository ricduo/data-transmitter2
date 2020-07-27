radio.setGroup(99)
basic.forever(function () {
    basic.showIcon(IconNames.Yes)
    radio.sendValue("x", input.acceleration(Dimension.X))
    radio.sendValue("y", input.acceleration(Dimension.Y))
    radio.sendValue("z", input.acceleration(Dimension.Z))
})
