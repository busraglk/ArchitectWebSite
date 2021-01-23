window.onload = () =>{
    setTimeout(()=>{
        document.querySelector('body').classList.add('display');
    },4000);
};


const hamburger = document.querySelector(".container .hamburger-menu");

hamburger.addEventListener('click', ()=> {
    document.querySelector('.container').classList.toggle("change");
});

document.querySelector('.scroll-btn').addEventListener('click',()=>{
    document.querySelector("html").style.scrollBehavior="smooth";
    setTimeout(()=>{
        document.querySelector("html").style.scrollBehavior="unset";
    },1000)
});