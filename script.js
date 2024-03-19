document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById('intro-name').style.opacity = 1;
        setTimeout(function() {
            document.getElementById('intro-container').style.opacity = 0;
            setTimeout(function() {
                document.getElementById('intro-container').style.display = 'none';
            }, 1000); // This delays the removal of the intro container to allow the fade-out.
        }, 4000); // This is the time that your name is fully visible.
    }, 500); // This is the initial delay before your name starts to fade in.
});
// script.js content will go here