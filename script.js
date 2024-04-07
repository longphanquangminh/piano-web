let audio = new Audio('https://cdn.jsdelivr.net/gh/Sop20Games/piano@main/tunes/');
let playtune=(e,key)=>{
    if(key) e.target = key; e.key = e.target.innerText;
    audio.src = "https://cdn.jsdelivr.net/gh/Sop20Games/piano@main/tunes/"+e.key+".wav";
    audio.play();

    // console.log(e.target.classList);
    document.querySelector('.key[data-key="'+e.key+'"]').classList.add("active");
    setTimeout(() => {
        document.querySelector('.key[data-key="'+e.key+'"]').classList.remove("active");

    }, 128);
    show(e.key);
}

document.addEventListener('keypress',playtune);

document.querySelectorAll('.key').forEach((e)=>{
    e.addEventListener("click",()=>{playtune(e,e)})
});


function show(e){
    document.querySelector('.show').innerHTML = e;
    // console.log(e)
}
