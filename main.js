const settings = document.querySelector('.settings')
const eventName = document.querySelector('#eventName')
const eventDay = document.querySelector('#eventDay')
const eventMonth =  document.querySelector('#eventMonth')
const eventYear =  document.querySelector('#eventYear')

const image =  document.querySelector('.image')
const eventSpan = document.querySelector('.event')

const setBtn =  document.querySelector('.setBtn')
const bodyBtn =  document.querySelector('.bodyBtn')

const daysCount =  document.querySelector('.daysCount')
const hoursCount =  document.querySelector('.hoursCount')
const minutesCount =  document.querySelector('.minutesCount')
const secondsCount =  document.querySelector('.secondsCount')

const event = document.querySelector('.event')

let usersTime
const setTime = () => {
    const currentTime = new Date()
    const result = usersTime - currentTime

    const day = Math.floor(result / 1000 / 60 / 60 / 24)
    const hour = Math.floor(result / 1000 / 60 / 60) % 24
    const minut = Math.floor(result / 1000 / 60) %60
    const sek = Math.floor(result / 1000 ) %60
  
    daysCount.textContent = day  
hoursCount.textContent =hour    
minutesCount.textContent =  minut
secondsCount.textContent =  sek
}

const timerUpdate = () => {
eventSpan.textContent = eventName.value
usersTime = new Date(`${eventMonth.value} ${eventDay.value} ${eventYear.value}  `)
setTime()

}

bodyBtn.addEventListener('click', () => {
    settings.classList.toggle('active')
})
setBtn.addEventListener('click', timerUpdate)
timerUpdate()
setInterval(setTime, 1000)

