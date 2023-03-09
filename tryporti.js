window.addEventListener('load', function() {
    var loadingScreen = document.getElementById('loading-screen');
    var website = document.getElementById('website');
  
    setTimeout(function() {
      loadingScreen.classList.add('loading-done');
      website.style.display = 'block';
    }, 2000);
  });
  