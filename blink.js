(function(){
  
  function blinkme(elems){
    for (var i = 0, n = elems.length; i < n; ++i) {
      var b = elems[i];
      b.style.visibility = (!b.style.visibility || b.style.visibility == 'visible') ? 'hidden' : 'visible';
    }
  };
  
  function init() {
    var blinks = document.getElementsByTagName('blink');
    setInterval(function(){
      blinkme(blinks);
    }, 1000);
  };
  
  if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", init, false);
  } else if (document.attachEvent) {
    document.attachEvent("onload", init);
  } else {
    window.onload = init;
  }
    
})();
