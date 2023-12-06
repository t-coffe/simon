const rouge = document.querySelector('.rouge');
const vert = document.querySelector('.vert');
const bleu = document.querySelector('.bleu');
const jaune = document.querySelector('.jaune');


rouge.style.backgroundColor = "lightcoral";
vert.style.backgroundColor =  "lightgreen";
bleu.style.backgroundColor =  "lightblue";
jaune.style.backgroundColor = "lightyellow";


const funcRed = ()=> {
  if (rouge.style.backgroundColor === "lightcoral") {
    rouge.style.backgroundColor = "red";
    rouge.style.border = "solid" ;
  }else {
    rouge.style.backgroundColor = "lightcoral";
    rouge.style.border = "dashed" ;
  }
} 

rouge.addEventListener('click', funcRed);

const funcGreen = ()=> {
  if (vert.style.backgroundColor === "lightgreen") {
    vert.style.backgroundColor = "green";
    vert.style.border = "solid" ;
  }else {
    vert.style.backgroundColor = "lightgreen";
    vert.style.border = "dashed" ;
  }
} 

vert.addEventListener('click', funcGreen);


const funcBlue = ()=> {
  if (bleu.style.backgroundColor === "lightblue") {
    bleu.style.backgroundColor = "blue";
    bleu.style.border = "solid" ;
  }else {
    bleu.style.backgroundColor = "lightblue";
    bleu.style.border = "dashed" ;
  }
} 

bleu.addEventListener('click', funcBlue);


const funcYellow = ()=> {
  if (jaune.style.backgroundColor === "lightyellow") {
    jaune.style.backgroundColor = "yellow";
    jaune.style.border = "solid" ;
  }else {
    jaune.style.backgroundColor = "lightyellow";
    jaune.style.border = "dashed" ;
  }
}

jaune.addEventListener('click', funcYellow);