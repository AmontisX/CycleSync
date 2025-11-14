document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    dateClick: function(info) {
      let log = prompt('Log your day: period, mood, or symptoms?');
      if(log) {
        saveLog(info.dateStr, log);
        alert('Saved: ' + log);
      }
    }
  });

  calendar.render();

  function saveLog(date, value) {
    let logs = JSON.parse(localStorage.getItem("cycleLogs")) || {};
    logs[date] = value;
    localStorage.setItem("cycleLogs", JSON.stringify(logs));
  }
});
