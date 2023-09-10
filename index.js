const dayEl = document.getElementById("day")
const timeEl = document.getElementById("time")



function newDate() {
    const day = new Date()

    dayEl.innerText = day.toLocaleDateString("en", {weekday:"long"})
    timeEl.innerText = day.toISOString()
}

setInterval(newDate, 1000);