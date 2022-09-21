(function(){
  const btnClick = document.getElementById('buttonClick')
  const backgroundMain = document.querySelector('.main')
  btnClick.addEventListener('click', alertS)

  function alertS() {
    btnClick.innerHTML = 'loading...';
    backgroundMain.style.background = 'url(./img/background_02.png) center';
    backgroundMain.style.transition = 'all .4s';
    setTimeout(function() {
      backgroundMain.style.background = "";
      btnClick.innerHTML = 'click on me';
    }, 2000);
  }
})();
