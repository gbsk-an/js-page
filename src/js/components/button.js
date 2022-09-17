(function(){
  const btnClick = document.getElementById('buttonClick')
  btnClick.addEventListener('click', alertS)

  function alertS() {
    btnClick.innerHTML = 'loading...';
    document.body.style.backgroundImage = 'url(./img/background_02.png)';
    document.body.style.transition = 'all .4s';
    setTimeout(function() {
      document.body.style.background = "";
      btnClick.innerHTML = 'click on me';
    }, 2000);
  }
})();
