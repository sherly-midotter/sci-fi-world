window.addEventListener('load', function() {
    var loadingScreen = document.getElementById('loading-screen');
    var website = document.getElementById('website');
  
    console.log('Loading screen shown');
  
    // Remove the loading screen after the GIF has finished playing
    setTimeout(function() {
      loadingScreen.classList.add('loading-done');
      website.style.display = 'block';
      console.log('Loading screen hidden');
    }, 2000); // Change this value to match the duration of your GIF
  });
  