const btnMenu=document.getElementById('btn-menu');
const barUn=document.getElementById('bar1');
const barDeux=document.getElementById('bar2');
const barTrois=document.getElementById('bar3');
const navBar=document.getElementById('navbar');


btnMenu.addEventListener('click', ()=>{
    barDeux.classList.toggle('hidden');
    barUn.classList.toggle('rotate-45');
    barUn.classList.toggle('absolute');
    barUn.classList.toggle('mt-1');
    barTrois.classList.toggle('-rotate-45');
    navBar.classList.toggle('h-52');
    btnMenu.classList.toggle('animate-bounce');

})