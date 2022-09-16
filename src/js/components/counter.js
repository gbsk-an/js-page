(function(){
  const buttons = document.querySelectorAll('.counterBtn')
  let count = 0;

  buttons.forEach(function(button){
    button.addEventListener('click', function(){
      if (button.classList.contains('minusBtn')){
        count--
      } else if (button.classList.contains('plusBtn')){
        count++
      }

      const counter = document.querySelector('#counter')
      counter.textContent = count
      if (count < 0 ){
        counter.style.color = 'rgb(172, 0, 0)'
      } else if (count > 0){
        counter.style.color = 'rgb(0, 90, 0)'
      } else {
        counter.style.color = '#BBBBBB'
      }
    })
  })
})();
