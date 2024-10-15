const calender = document.getElementById("calender");
const monthYear = document.getElementById("monthYear");
const daysContainer = document.querySelector(".days");

let currentDate = new Date();

function renderCalendar(){
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    monthYear.textContent = `${getMonthName(month)} ${year}`;

    daysContainer.innerHTML = '';

    for(let i = firstDayOfMonth - 1; i >= 0; i--){
        const dayElement = document.createElement("div");
        dayElement.classList.add('day', 'prev-month-day');
        dayElement.textContent = daysInPrevMonth - i;
        daysContainer.appendChild(dayElement);
    }

    for(let i = 1; i <= daysInMonth; i++){
        const dayElement = document.createElement("div");
        dayElement.classList.add('day', 'current-month-day');
        dayElement.textContent = i;

        if(i === currentDay && month === new Date().getMonth() && year === new Date().getFullYear()){
            dayElement.classList.add('current-day');
        }
        daysContainer.appendChild(dayElement);
    }
}

function getMonthName(month){
    const monthNames = [
        'January', 'Febuary', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
    ];
    return monthNames[month];
}

function goToPreviousMonth(){
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
}

function goToNextMonth(){
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
}

document.querySelector(".prevMonth").addEventListener('click', goToPreviousMonth);
document.querySelector(".nextMonth").addEventListener('click', goToNextMonth);

renderCalendar();