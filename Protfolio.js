const scrollBox= document.getElementById('scrollBox');

function checkScroll(){
    if(window.scrollY>200){
        scrollBox.classList.add('show');

    }else{
        scrollBox.classList.remove('show');
    }
}
window.addEventListener('scroll',checkScroll);