const wrapper = document.querySelector('.wrapper');
const qrInput = document.querySelector('.form input');
const generateBtn = document.querySelector('.form button')
const qrImg = document.querySelector('.qr-code img');
const api = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=';
const qrWiFi =document.querySelector('.wifi');
const wifiQr = document.querySelector('.qrWifi');
const ssid = document.querySelector('.ssid');
const password = document.querySelector('.password');

let preValue;
let preValue2;
let preValue3;

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if(!qrValue || preValue === qrValue){
        return;
    }
    preValue = qrValue;

    generateBtn.innerHTML = 'Generating QR Code...';

    qrImg.addEventListener('load', () => {
        wrapper.classList.add('active');
        generateBtn.innerHTML = 'Generate QR Code';
        qrWiFi.classList.add('oculto');
    });
    urlQrCode();
});
function urlQrCode(){
    let url = api + qrInput.value;
    qrImg.src = url;
}

const p = document.querySelector('p');
const h2 = document.querySelector('h2');

qrWiFi.addEventListener('click', () => {
    h2.innerText = 'WiFiQR...'
    p.innerText = 'Enter SSID and password'
    wifiQr.classList.add('active')
    qrWiFi.classList.add('oculto')
    qrInput.classList.add('oculto');
    generateBtn.classList.add('oculto');
    const ssid = document.querySelector('.ssid');
    ssid.classList.add('active');
    const password = document.querySelector('.password');
    password.classList.add('active');
})

wifiQr.addEventListener('click', () => {
    let qrValue2 = ssid.value.trim();
    if(!qrValue2 || preValue2 === qrValue2){
        return;
    }
    preValue2 = qrValue2;

    let qrValue3 = password.value.trim();
    if(!qrValue3 || preValue3 === qrValue3){
        return;
    }
    preValue3 = qrValue3;

    qrImg.addEventListener('load', () => {
        wrapper.classList.add('active');
        wifiQr.innerHTML = 'Generate QR Code';
    });

    wifiQrCode();
})

function wifiQrCode(){
    const $encription = "WPA";
    const $ssid = ssid.value;
    const $password = password.value
    let url = `${api}WIFI:S:${$ssid};T:${$encription};P:${$password};`;
    qrImg.src = url;
}

qrInput.addEventListener('keyup', () => {
    if(!qrInput.value.trim()){
        wrapper.classList.remove('active');
        preValue = "";
    }
});

const btnDownload = document.querySelector('.btn');
const img = document.querySelector('img')

btnDownload.addEventListener('click', () => {
    let imgPath = img.getAttribute('src');

    window.open(imgPath)
})
