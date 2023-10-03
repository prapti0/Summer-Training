// Create the necessary elements
const container = document.createElement('div');
container.classList.add('container');

const h1 = document.createElement('h1');
h1.textContent = 'Digital Clock';

const boxDiv = document.createElement('div');
boxDiv.classList.add('box');

const clockH2 = document.createElement('h2');
clockH2.id = 'clock';

const buttonsDiv = document.createElement('div');
buttonsDiv.classList.add('buttons');

const startButton = document.createElement('button');
startButton.textContent = 'Start';
startButton.onclick = startClock;

const stopButton = document.createElement('button');
stopButton.textContent = 'Stop';
stopButton.onclick = stopClock;

// Append the elements to their parent elements
container.appendChild(h1);
boxDiv.appendChild(clockH2);
container.appendChild(boxDiv);
buttonsDiv.appendChild(startButton);
buttonsDiv.appendChild(stopButton);
container.appendChild(buttonsDiv);

// Append the container element to the body of the document
document.body.appendChild(container);

// Define the clock-related functions
let intervalId;

function startClock() {
  clearInterval(intervalId);
  updateClock(); // Update the clock immediately
  intervalId = setInterval(updateClock, 1000); // Update the clock every second
}

function stopClock() {
  clearInterval(intervalId);
}

function updateClock() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const month = monthNames[currentTime.getMonth()];
  const day = dayNames[currentTime.getDay()];
  const date = currentTime.getDate();
  const year = currentTime.getFullYear();

  // Determine whether it's morning or afternoon
  const period = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  const formattedHours = hours % 12 || 12;

  // Add leading zeros if the values are less than 10
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

  const timeString = formattedHours + ':' + formattedMinutes + ':' + formattedSeconds + ' ' + period;
  const dateString = day + '/ ' + month + ' ' + date + '/ ' + year;
  const dateTimeString = '<div>' + dateString + '</div><div>' + timeString + '</div>';

  clockH2.innerHTML = dateTimeString;
}

// Start the clock when the page loads
document.addEventListener('DOMContentLoaded', function () {
  // Set the initial time to "---, ------ --, ---- 00:00:00 AM"
  clockH2.textContent = '<div>---, ------ --, ----</div><div>00:00:00 AM</div>';

  // Start the clock
  startClock();
});
