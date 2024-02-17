const qrCodeImg = document.querySelector(".app .img");
const button = document.querySelector(".app input[type='button']");
const inputValue = document.querySelector(".app input[type='text']");

button.onclick = () => {
    qrGenerator();
}

function qrGenerator() {

    if (inputValue.value !== "") {
        const link = inputValue.value;
        console.log(link)
        qrCodeImg.innerHTML = "";

        new QRCode(qrCodeImg, {
            text: link,
            width: 250,
            height: 250
        });
    } else {
        inputValue.classList.add("error");
        setTimeout(() => {
            inputValue.classList.remove("error");
            alert("Please enter your text/url");
        }, 1000);

    }
}
