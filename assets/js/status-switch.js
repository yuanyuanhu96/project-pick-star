console.log('status switch');

const statusButton = document.querySelector('#status-button');
const statusShow = document.querySelector('#status-show');

let status = 0;

function nextStatus() {
  status = parseInt(status, 10);
  status += 1;
  statusShow.innerText = status;
  claw.status = status; // who send to whom
}

statusButton.addEventListener('click', nextStatus);
