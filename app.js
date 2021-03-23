const btnSee = document.querySelector('#btnSee');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const container = document.querySelectorAll('.container');

btnSee.addEventListener('click', function(){
  console.log('click See What We Have');
  
 
 if(header.classList.contains('open')){ 
    body.classList.remove('noscroll');
    header.classList.remove('open');    
    container.forEach(function(element){
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
    
  }
  else { 
    body.classList.add('noscroll');
    header.classList.add('open');
    container.forEach(function(element){
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });
	
}
});