let level =document.getElementById('t1')
let lives=document.getElementById('lives')
let boxes=document.getElementById('boxes')
let t2= document.getElementById('t2')
let buttonreset=document.getElementById('reset')
let winSound = document.getElementById('winSound')
let loseSound = document.getElementById('loseSound')
let currentlevel = 1; //  المتغير الخاص بتحديد المستوي الحالي  
let l = 3;  //  المتغير الخاص بتخزين عدد القلوب الحالية  
let treasureIndex = 0; //  المتغير الخاص بمعرفة ترتيب  صندوق الكنز 
let gameOver = false; //  متغير هنستخدمه لايقاف اللعبة عند الخسارة  

//  انشاء الصناديق 
function generateBoxes(x){
    t2.innerText =''
    l = 3;
    boxes.innerHTML = '';
    lives.innerText='💖'.repeat(3);
    level.innerText=`level = ${currentlevel}`;
    treasureIndex = Math.floor(Math.random()*x);

    for (let i=0; i<x; i++){
        let box = document.createElement('img');
        box.classList.add('image');
        box.src ='box_closed.png'
        box.dataset.index=i;
        box.addEventListener('click' , boxClick);

        boxes.appendChild(box);
    }
}

function boxClick(event){
    if (gameOver == false){
    let b = event.currentTarget;
    let boxIndex = Number (b.dataset.index);

    if(boxIndex == treasureIndex){
        b.src = 'win_box.png';
        t2.innerText ='you win';
        winSound.play();

        setTimeout( () =>{
            currentlevel++;
            generateBoxes(currentlevel + 1);
        }, 2000)

    } else{
        b.src = 'lose_box.png';
        l--;
        loseSound.play();
        lives.innerText ='💖'.repeat(l);
        if(l == 0){
            gameOver =  true;
            t2.innerText ='you lost'
        }
    }}
    buttonreset.addEventListener('click',() => {
        currentlevel=1;
        generateBoxes(2);
        gameOver=false;
    }

    )
}
    



generateBoxes(2)
