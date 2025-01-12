'use strict'

const agree = document.getElementById('agree');
const preform = document.getElementById('preform');
const scan = document.getElementById('scan');
const downPanel = document.getElementById('down_panel');
const ticket = document.getElementById('ticket');

agree.onclick = () => {
    preform.style.display = 'none'; 
    scan.style.display = 'flex';
}
downPanel.onclick = () => {
    preform.style.display = 'none'; 
    scan.style.display = 'none';
    ticket.style.display = 'flex';
}
