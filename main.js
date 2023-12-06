const rouge = document.querySelector('.rouge');
const vert = document.querySelector('.vert');
const bleu = document.querySelector('.bleu');
const jaune = document.querySelector('.jaune');


vert.style.backgroundColor = "green";
bleu.style.backgroundColor = "blue";
jaune.style.backgroundColor = "yellow";
// rouge.style.backgroundColor = "lightcoral";


rouge.addEventListener('click', ()=> {
  console.log(rouge.currentStyle);
  if (rouge.style.backgroundColor === "lightcoral") {
    rouge.style.backgroundColor = "red";
  }else {
    rouge.style.backgroundColor = "lightcoral";
  }
})