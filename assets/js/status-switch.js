const statusButton = document.querySelector('#status-button');
const statusShow = document.querySelector('#status-show');

let status = 0;
statusUpdate();

function nextStatus() {
  status = parseInt(status, 10);
  status += 1;
  statusShow.innerText = status;

  //claw.status = status; // who send to whom
}

function statusUpdate() {
  statusShow.innerText = status;
}

statusButton.addEventListener('click', nextStatus);
