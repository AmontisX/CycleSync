document.addEventListener('DOMContentLoaded', function() {
  const calendarBody = document.getElementById('calendar-body');
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  // first day of the month
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let date = 1;
  for(let i=0; i<6; i++) { // weeks
    const row = document.createElement('tr');

    for(let j=0; j<7; j++) { // days
      const cell = document.createElement('td');
      if(i === 0 && j < firstDay) {
        cell.innerHTML = '';
      } else if(date > daysInMonth) {
        cell.innerHTML = '';
      } else {
        cell.innerHTML = date;
        cell.style.cursor = 'pointer';
        cell.addEventListener('click', () => {
          const log = prompt('Log your day: period, mood, or symptoms?');
          if(log) {
            saveLog(date, log);
            alert('Saved: ' + log);
          }
        });
        date++;
      }
      row.appendChild(cell);
    }
    calendarBody.appendChild(row);
  }

  function saveLog(day, value) {
    const key = `log-${day}`;
    localStorage.setItem(key, value);
  }
});
