



// Script controling navbar behavior 

window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if(this.scrollY <= 90) nav.className = ''; else nav.className = 'scroll';
};


// Script controling the burger menu

(function(){
    var burger = document.querySelector('.burger-container'),
        header = document.querySelector('.header-burger');
    
    burger.onclick = function() {
        header.classList.toggle('menu-opened');
    }
}());
