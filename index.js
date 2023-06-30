let resultado = document.querySelector('span');
const botao = document.querySelector('.botao');
const notas = document.querySelectorAll('.bola');
const container = document.querySelector('.container');
const container2 = document.querySelector('.container2');

botao.addEventListener("click", ()=>{
    container.style.display = "none";
    container2.style.display = "flex";
})

notas.forEach((bola) => {
    bola.addEventListener("click",()=>{
        resultado.innerHTML = bola.innerHTML;
    })
});