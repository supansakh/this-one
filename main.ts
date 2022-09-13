let pitch = 0
let roll = 0
basic.forever(function () {
    pitch = input.rotation(Rotation.Pitch)
    roll = input.rotation(Rotation.Roll)
    if (Math.abs(roll) >= -30 && Math.abs(roll) <= 0) {
        basic.showNumber(input.rotation(Rotation.Roll))
        basic.showIcon(IconNames.Heart)
    } else if (Math.abs(roll) > 0 && Math.abs(roll) <= 30) {
        basic.showNumber(input.rotation(Rotation.Roll))
        basic.showIcon(IconNames.SmallHeart)
    } else if (Math.abs(roll) < -30 && Math.abs(roll) <= -89) {
        basic.showNumber(input.rotation(Rotation.Roll))
        basic.showIcon(IconNames.Square)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        basic.pause(100)
        music.stopAllSounds()
    } else if (Math.abs(roll) > 30 && Math.abs(roll) <= 89) {
        basic.showNumber(input.rotation(Rotation.Roll))
        basic.showIcon(IconNames.SmallSquare)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        basic.pause(100)
        music.stopAllSounds()
    } else {
        basic.clearScreen()
    }
    if (Math.abs(pitch) > 90 && Math.abs(pitch) < 100) {
        basic.showNumber(input.rotation(Rotation.Pitch))
        basic.showIcon(IconNames.Yes)
    } else if (Math.abs(pitch) >= 100 && Math.abs(pitch) <= 115) {
        basic.showNumber(input.rotation(Rotation.Pitch))
        basic.showIcon(IconNames.No)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        basic.pause(100)
        music.stopAllSounds()
    } else if (Math.abs(pitch) > 115 && Math.abs(pitch) < 125) {
        basic.showNumber(input.rotation(Rotation.Pitch))
        basic.showIcon(IconNames.Happy)
    } else if (Math.abs(pitch) >= 125 && Math.abs(pitch) <= 130) {
        basic.showNumber(input.rotation(Rotation.Pitch))
        basic.showIcon(IconNames.Asleep)
    } else if (Math.abs(pitch) > 130 && Math.abs(pitch) < 140) {
        basic.showNumber(input.rotation(Rotation.Pitch))
        basic.showIcon(IconNames.Giraffe)
    } else if (Math.abs(pitch) >= 140) {
        basic.showNumber(input.rotation(Rotation.Pitch))
        basic.showIcon(IconNames.Sad)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        basic.pause(500)
        music.stopAllSounds()
    } else {
        basic.clearScreen()
    }
})
