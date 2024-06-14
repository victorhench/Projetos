let slideElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button-cta");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector('.password'); 

let containerPassword = document.querySelector("#password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUV0123456789!@";
let novaSenha = "";

sizePassword.textContent = slideElement.value;

slideElement.oninput = function(){
    sizePassword.textContent = this.value;
}

buttonElement.onclick = generatePassword;

function generatePassword(){
    let pass = "";
    for(let i = 0, n = charset.length; i < slideElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    containerPassword.classList.remove("hide");
    password.textContent = pass; 
    novaSenha = pass;
}
function copyPassword(){
    alert("Senha copiada com sucesso")
    navigator.clipboard.writeText(novaSenha);
}