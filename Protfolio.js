const scrollBox= document.getElementById('scrollBox');

function checkScroll(){
    if(window.scrollY>200){
        scrollBox.classList.add('show');

    }else{
        scrollBox.classList.remove('show');
    }
}
window.addEventListener('scroll',checkScroll);

document.querySelectorAll('.javascript, .java, .sql, .html, .css, .nodejs, .aws, .photoshop, .polisci, .compsci, .cloud, .sendmessage').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
        button.style.transition = 'transform 0.3s ease-in-out';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});


