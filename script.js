let cardArray = [
{
    'name' : "CSS",
    "img" : "http://thapatechnical.online/logos/css.png"
},
{
    'name' : "HTML",
    "img" : "http://thapatechnical.online/logos/html5.png"
},
{
    'name' : "JQUERY",
    "img" : "http://thapatechnical.online/logos/jquery.png"
},
{
    'name' : "JS",
    "img" : "http://thapatechnical.online/logos/js.png"
},
{
    'name' : "NODE",
    "img" : "http://thapatechnical.online/logos/nodejs.png"
},
{
    'name' : "Python",
    "img" : "http://thapatechnical.online/logos/python.png"
},
];

const parentDiv = document.querySelector("#card-section");
//dublicate each card
const gameCard = cardArray.concat(cardArray)
console.log(gameCard);


let shuffledChild = Array.from(gameCard).sort( compareFn=()=> 0.5 - Math.random())
let clickCount = 0;
 let firstCard = "";
 let secondCard = "";
// document.querySelector("#restart-btn").addEventListener("click", e => {
//    childDiv.reset(); 
// })
//  document.querySelector(".restart-btn").addEventListener("click" , function(){
//     window.location.reload();
//  }setTimeout(location.reload(true),1000))
 
 
 const card_matches = () =>{
let card_selected = document.querySelectorAll(".card_selected");
card_selected.forEach(callbackfn=(curElem) => {
curElem.classList.add("card_match")
})
 }
 const resetGame = () =>{
    clickCount=0;
    firstCard = "";
    secondCard = "";
    let card_selected = document.querySelectorAll(".card_selected");
card_selected.forEach(callbackfn=(curElem) => {
curElem.classList.remove("card_selected")
})
 }


parentDiv.addEventListener('click',(Event)=>{
  let curCard = Event.target;
  if(curCard.id==="card_section"){
    return false;
  }
  clickCount++;
  if(clickCount<3){
    if(clickCount ===1){
      firstCard = curCard.parentNode.dataset.name;
      curCard.parentNode.classList.add("card_selected")
    }
    else{
        secondCard = curCard.parentNode.dataset.name;
        curCard.parentNode.classList.add("card_selected")
    }
    if(firstCard!==""&& secondCard !=""){
        if(firstCard===secondCard){
            // curCard.classList.add("card-match")
            setTimeout(handler = () =>{
                card_matches()
                resetGame()
            }, timeout = 1000)
           
            card_matches()
            resetGame()
        }
       else{
        setTimeout(handler = () =>{
        
            resetGame()
        }, timeout = 1000)
       
    
       } 
    }
  }
  
  
})

  for(i=0; i<shuffledChild.length; i++){
    const childDiv = document.createElement("div");
    childDiv.classList.add('card')
    childDiv.dataset.name = shuffledChild[i].name;
    //childDiv.style.backgroundImage = `url(${shuffledChild[i].img})`
    
    const front_div = document.createElement("div");
    front_div.classList.add("front-card")

    const back_div = document.createElement("div");
    back_div.classList.add("back-card")
    back_div.style.backgroundImage = `url(${shuffledChild[i].img})`

    parentDiv.appendChild(childDiv);

    childDiv.appendChild(front_div);
    childDiv.appendChild(back_div);
}
//at a time select only two
