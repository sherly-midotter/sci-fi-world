window.addEventListener('load', function() {
    var loadingScreen = document.getElementById('loading-screen');
    var website = document.getElementById('website');
  
    // Remove the loading screen after the GIF has finished playing
    setTimeout(function() {
      loadingScreen.classList.add('loading-done');
      website.style.display = 'block';
    }, 3000); // Change this value to match the duration of your GIF
  });
  