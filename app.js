const p1b=document.querySelector('#p1btn');
const p2b=document.querySelector('#p2btn');
const rest=document.querySelector('#set');
p1b.classList.add('blur');
set.classList.add('blur');
p2b.classList.add('blur');
const p1dis=document.querySelector('#p1');
const p2dis=document.querySelector('#p2');
const container=document.querySelector('#select');
const create=document.querySelector('#create');
const im1=document.querySelector('#im1');
const head=document.querySelector('#head');
let p1score=0;
let p2score=0;
const max=5;
const teamlist=['Bengaluru FC','Chennaiyin FC','FC Goa','Odisha FC','Kerala Blasters','Jamshedpur FC','Hyderabad FC','Northeast United FC'];
let gameover=true;
let start=false;
let rand1;
let rand2;
create.addEventListener('click',function(){
    if(!start){
    rand1= num();
    rand2=num();
    if(rand1===rand2){
        rand2=num()
    }
    im1.src=`${rand1}.png`;
    im2.src=`${rand2}.png`;
    gameover=false;
    head.innerText='Match Going on';
    p1b.innerText=teamlist[rand1-1];
    p2b.innerText=teamlist[rand2-1];
    p1b.classList.remove('blur');
    p2b.classList.remove('blur');
    set.classList.remove('blur');
    create.classList.add('blur');
    start=true;
}
})


p1b.addEventListener('click',function(){
    if(!gameover){
    p1score+=1;
    if(p1score===max){
        p1b.classList.add('winner');
        p2b.classList.add('loser');
        p1b.classList.add('blur');
        p2b.classList.add('blur');
        gameover=true;
        head.innerText=`${teamlist[rand1-1]} won the match`;
    }
    p1dis.textContent=p1score;
    }
});
p2b.addEventListener('click',function(){
    if(!gameover){
        p2score+=1;
        if(p2score===max){
            p2b.classList.add('winner');
            p1b.classList.add('loser');
            p1b.classList.add('blur');
            p2b.classList.add('blur');
            head.innerText=`${teamlist[rand2-1]} won the match`;
            gameover=true;
        }
        p2dis.textContent=p2score;
    }
});
rest.addEventListener('click',function(){
    reset();
    p1b.classList.add('blur');
    p2b.classList.add('blur');
    set.classList.add('blur');
    create.classList.remove('blur');
    start=false;

});
function num(){
    return Math.floor(Math.random()*8)+1;
}
function reset()
{
    p1score=0;
    p2score=0;
    p1dis.textContent=p1score;
    p2dis.textContent=p2score;
    gameover=false;
    p1b.classList.remove('winner','loser');
    p2b.classList.remove('winner','loser');
    head.innerText="Let's Play !!!";
    im1.src='isl.png';
    im2.src='isl.png';
}