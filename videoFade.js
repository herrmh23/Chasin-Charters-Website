window.addEventListener('scroll', function() {
        const video = document.getElementById('mainVideo');
        let scrollTop = window.scrollY;
        let fadeStart = 0;
        let fadeEnd = window.innerHeight / 2; // Video fades out by halfway down the screen

        let opacity = 1;

        if (scrollTop <= fadeStart) {
            opacity = 1;
        } else if (scrollTop >= fadeEnd) {
            opacity = 0;
        } else {
            opacity = 1 - (scrollTop - fadeStart) / (fadeEnd - fadeStart);
        }

        video.style.opacity = opacity;
    });

    window.addEventListener('scroll', function() {
        const video = document.getElementById('businessName');
        let scrollTop = window.scrollY;
        let fadeStart = 0;
        let fadeEnd = window.innerHeight / 3; // Video fades out by halfway down the screen

        let opacity = 1;

        if (scrollTop <= fadeStart) {
            opacity = 1;
        } else if (scrollTop >= fadeEnd) {
            opacity = 0;
        } else {
            opacity = 1 - (scrollTop - fadeStart) / (fadeEnd - fadeStart);
        }

        video.style.opacity = opacity;
    });