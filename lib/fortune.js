const fortuneCookies = [
    "number1",
    "number2",
    "number3",
    "number4",
    "number5"
]

exports.getFortune = () => {
    const idx = Math.floor(Math.random()*fortuneCookies.length)
    return fortuneCookies[idx]
}