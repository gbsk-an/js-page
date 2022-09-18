(function() {
  const clock = document.getElementById('localTime');

  setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
  }, 1000)
})();
