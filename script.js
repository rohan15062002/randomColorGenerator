function changeColor(){
const randomNumber = Math.floor(Math.random() * 16777215);
const randomCode = "#" + randomNumber.toString(16);

document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;
}
const buttonColor=document.getElementById("btn");

buttonColor.addEventListener("click",changeColor);


