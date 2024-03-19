// This code will be responsible for adding and then removing the intro after the animation is complete.
document.addEventListener('DOMContentLoaded', function() {
    var introName = document.getElementById('intro-name');
    introName.style.opacity = '1'; // Trigger the CSS animation by changing the opacity

    // Set a timeout to remove the intro-container after the animation completes
    setTimeout(function() {
        var introContainer = document.getElementById('intro-container');
        introContainer.style.display = 'none';
    }, 5000); // 5000 ms for the full duration of the CSS animation
});
