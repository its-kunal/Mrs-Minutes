let face = document.querySelector(".faceClock")
async function setAttributeDel(num, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            face.setAttribute("src", `./Assets/FC${num}.svg`)
            resolve()
        }, delay)
    })

}

async function blink() {
    let z = 500
    await setAttributeDel(2, 0)
    await setAttributeDel(4, 50 + z)
    await setAttributeDel(3, 100 + z)
    await setAttributeDel(4, 50 + z)
    await setAttributeDel(1, 50 + z)
    await setAttributeDel(2, 100 + z)
}


// blink()

async function rotateSecondHand() {

}

let secHand = document.getElementById("sechand")
let hourHand = document.getElementById("hourhand")
let minHand = document.getElementById("minutehand")
let x = setInterval(() => {
    let d = new Date()
    let h = d.getHours()
    let min = d.getMinutes()
    let zx = d.getSeconds()
    let zxn = d.getMilliseconds()
    let cla1 = zx * 6 + zxn * 0.006
    let cla2 = min * 6 + zx * 0.1 + zxn * 0.0001
    let cla3 = h * 30 + min * 0.2 + zx * (1 / 120) + zxn * (1 / 120000)
    minHand.style.transform = `rotate(${cla2}deg)`
    hourHand.style.transform = `rotate(${cla3}deg)`
    secHand.style.transform = `rotate(${cla1}deg)`
    if (zx==59) {
        blink()
    }
}, 1)
