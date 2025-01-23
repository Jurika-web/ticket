'use strict'

const agree = document.getElementById('agree');
const preform = document.getElementById('preform');
const scan = document.getElementById('scan');
const downPanel = document.getElementById('down_panel');
const ticket = document.getElementById('ticket');
let password = document.getElementById('password');
let trolleybus = document.getElementById('trolleybus');
let tram = document.getElementById('tram');
let number = document.getElementById('number');
let seria =document.getElementById('seria');
let date = document.getElementById('date');
let time = document.getElementById('time');
let transport = document.getElementById('transport');
let timer = document.getElementById('timer');
let min = 59;
let sec = 59;
let numberValue = '';


let constrDate = new Date();
const day = constrDate.getDate();
const month = constrDate.getMonth();
const year = constrDate.getFullYear();
const hour = constrDate.getHours();
const minute = constrDate.getMinutes();
const second = constrDate.getSeconds();
let currentDate = `${day}.${month}.${year}`;
let currentTime = `${hour}:${minute}:${second}`;

//переключение с первого окна
agree.onclick = () => {
    preform.style.display = 'none'; 
    scan.style.display = 'flex';
    number.textContent;
}
//переключение со второго окна, установка серии, установка даты, установка времени, ввод счетчика времени
//вывод вида транспорта
downPanel.onclick = () => {
    preform.style.display = 'none'; 
    scan.style.display = 'none';
    ticket.style.display = 'flex';
    seria.textContent = Math.floor(500000000 + Math.random() * (999999999 + 1 - 500000000));
    date.textContent = currentDate;
    time.textContent = currentTime;
    timer.textContent = min + ':' + sec
}
password.addEventListener("keydown", (event) =>{
    event.preventDefault()
    number.textContent = password.value += event.key;
})
trolleybus.onchange = () =>{
    transport.textContent = 'Тролейбус'
}
tram.onchange = () =>{
    transport.textContent = 'Вагон'
}
//блок для счетчика
function run(){
    if(min>0){
        sec --
        timer.textContent = min + ':' + sec
        if(sec===0){
            sec+=60
            min--
            timer.textContent = min + ':' + '0' + '0'
        }
        if(sec<10){
            timer.textContent = min + ':' + '0' + sec
        }
    }
console.log(sec)
}
setInterval(run, 1000);

//код для вывода камеры
navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    video: facingMode: {exact: 'environment'}
    .then((localMediaStream) => {
      const video = document.querySelector("video");
      video.srcObject = localMediaStream;
    })
    .catch((error) => {
      console.log("Rejected!", error);
    });

