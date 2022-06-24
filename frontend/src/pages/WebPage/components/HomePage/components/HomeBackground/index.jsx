import React, { useEffect } from 'react';

const HomeBackground = () => {
    const PRIMARY_WHITE = "#F9F9F9";
    const PRIMARY_LIGHT_BLUE = "#abdbe3";

    const CANVAS_STYLE = { 
      display : "block",
      position : "absolute",
      top : "0", 
      left : "0",
      zIndex : "0" 
    };
    
    useEffect( () => {
        let canvas = document.getElementById('home-background');

        window.addEventListener('resize', (e) => {resizeCanvas(canvas)}, false);

        resizeCanvas(canvas);
    });

    function resizeCanvas(canvas){
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
        
        canvas.width = windowWidth;
        canvas.height = windowHeight;

        var ctx = canvas.getContext('2d');

        var circularGradient = ctx.createRadialGradient(windowWidth * 0.8, windowHeight * 0.7, windowHeight * 0.4, windowWidth * 0.8, windowHeight * 0.5, windowWidth);

        circularGradient.addColorStop(0, PRIMARY_LIGHT_BLUE);
        circularGradient.addColorStop(0.3, PRIMARY_WHITE);
        ctx.fillStyle = circularGradient;
        ctx.fillRect(0, 0, windowWidth, windowHeight);
        
        ctx.lineWidth = 1;
        ctx.strokeStyle = PRIMARY_WHITE;

        ctx.beginPath();
        ctx.ellipse(windowWidth, windowHeight * 0.3, windowWidth * 0.2, windowHeight * 0.4, 0, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.ellipse(windowWidth, windowHeight * 0.3, windowWidth * 0.28, windowHeight * 0.6, 0, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.ellipse(windowWidth, windowHeight * 0.3, windowWidth * 0.36, windowHeight * 0.7, 0, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.ellipse(windowWidth, windowHeight * 0.3, windowWidth * 0.44, windowHeight * 0.8, 0, 0, 2 * Math.PI);
        ctx.stroke();
    }

    return (
      <canvas id='home-background' style={CANVAS_STYLE}></canvas>
    );
}

export default HomeBackground;