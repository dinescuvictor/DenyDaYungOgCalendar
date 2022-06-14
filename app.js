const date = new Date();
const currentDate = new Date().getDate()
const currentMonth = new Date().getMonth()
const currentYear = new Date().getFullYear()
const months = [
    'Jan.',
    'Feb.',
    'Mar.',
    'Apr.',
    'May.',
    'Jun.',
    'Jul.',
    'Aug.',
    'Sep.',
    'Oct.',
    'Nov.',
    'Dec.',
]
const dateHeading = document.querySelector('.date h1')
const monthDays = document.querySelector('.days')
const leftArrow = document.querySelector('.pre')
const rightArrow = document.querySelector('.next')

const createCalendar = () => {
    date.setDate(1)
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    const lastDayPreviousMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate()
    const firstDayIndex = date.getDay()
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay()
    const nextDays = 7 - lastDayIndex - 1
    dateHeading.innerHTML = `${months[date.getMonth()]} ${date.getFullYear()}`

    let days = '';

    for (let i = firstDayIndex; i > 0; i--) {
        days += `<div class="prev-date">${lastDayPreviousMonth - i + 1}</div>`
    }

    for (let i = 1; i <= lastDay; i++) {
        if (
            i === currentDate && date.getMonth() === currentMonth && date.getFullYear() === currentYear
        ) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }

    for (let i = 1; i <= nextDays; i++) {
        days += `<div class="next-date">${i}</div>`
    }

    monthDays.innerHTML = days
}


leftArrow.addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1)
    createCalendar()
})
rightArrow.addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1)
    createCalendar()
})

createCalendar()





