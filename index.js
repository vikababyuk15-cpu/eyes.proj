const eyes = document.querySelectorAll('.eyes');
document.addEventListener('mousemove', (event) => {
    
    eyes.forEach(eye => {
        
        const eyeRect = eye.getBoundingClientRect();
        
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;
        

        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const deltaX = mouseX - eyeCenterX;
        const deltaY = mouseY - eyeCenterY;
        
        const angleRad = Math.atan2(deltaY, deltaX);
        
        const pupilMaxRadius = eyeRect.width * 0.15; 
        
        const pupilOffsetX = pupilMaxRadius * Math.cos(angleRad);
        const pupilOffsetY = pupilMaxRadius * Math.sin(angleRad);
        
        const pupil = eye.querySelector('.pupil');
        
        if (pupil) {
            pupil.style.transform = `translate(${pupilOffsetX}px, ${pupilOffsetY}px)`;
        }
    });
});