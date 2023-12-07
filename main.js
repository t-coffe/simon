const rouge = document.querySelector('.rouge');
const vert = document.querySelector('.vert');
const bleu = document.querySelector('.bleu');
const jaune = document.querySelector('.jaune');


rouge.style.backgroundColor = "lightcoral";
vert.style.backgroundColor =  "lightgreen";
bleu.style.backgroundColor =  "lightblue";
jaune.style.backgroundColor = "lightyellow";

const funcRed = ()=> {
  rouge.style.backgroundColor = "red";
  rouge.style.border = "solid" ;
  setTimeout(() => {
    rouge.style.backgroundColor = "lightcoral";
    rouge.style.border = "dashed" ;
  }, 350);
} 


const funcGreen = ()=> {
  vert.style.backgroundColor = "green";
  vert.style.border = "solid" ;
  setTimeout(() => {
    vert.style.backgroundColor = "lightgreen";
    vert.style.border = "dashed" ;
  }, 350);
} 



const funcBlue = ()=> {
  bleu.style.backgroundColor = "blue";
  bleu.style.border = "solid" ;
  setTimeout(() => {
    bleu.style.backgroundColor = "lightblue";
    bleu.style.border = "dashed" ;
  }, 350);
} 



const funcYellow = ()=> {
  jaune.style.backgroundColor = "yellow";
  jaune.style.border = "solid" ;
  setTimeout(() => {
    jaune.style.backgroundColor = "lightyellow";
    jaune.style.border = "dashed" ;
  }, 350);
}


const tab = [];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const funcNBtableau = () => {
  let index = 0;
  const interval = setInterval(
    ()=>{
      
    if (tab[index] === 0) {
      funcRed();
      } else if (tab[index] === 1) {
        funcGreen();
      } else if (tab[index] === 2) {
        funcBlue();
      } else if (tab[index] === 3) {  
        funcYellow();
      }
      index++;
      
      if(index === tab.length){
        clearInterval(interval);
      }
    }
    ,550)

}

rouge.addEventListener('click', ()=> {
  let hasard = getRandomInt(4);
  tab.push(hasard);
  console.log(tab);
  funcNBtableau();
})