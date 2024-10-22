const form = document.querySelector('form');
const table = 
document.querySelector('table');

form.addEventListener('submit', (event) => {
event.preventDefault();

const docketNumber = document.querySelector('#docket-number').value;
const caseType = document.querySelector('#case-type').value;
const clientName = document.querySelector('#client-name').value;
const caseDetails = document.querySelector('#case-details').value;

const row = table.insertRow(-1);
const docketNumberCell = row.insertCell(0);
const caseTypeCell = row.insertCell(1);
const clientNameCell = row.insertCell(2);
const caseDetailsCell = row.insertCell(3);

docketNumberCell.innerHTML = docketNumber;
caseTypeCell.innerHTML = caseType;
clientNameCell.innerHTML = clientName;
caseDetailsCell.innerHTML = caseDetails;

form.reset();
});
