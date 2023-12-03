window.addEventListener('DOMContentLoaded', (event) =>{


    let canvas = document.getElementById("grass");
    let canvasContainer = document.querySelector(".grass");
    canvas.width = canvasContainer.offsetWidth+80;
    canvas.height = canvasContainer.offsetHeight;
    let ctx = canvas.getContext('2d');
    canvas.style.background = "transparent";

   // Cubic easing function
    function cubicEaseInOut(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }
    
    // Modified linear interpolation function with cubic ease-in-out
    function easeInOut(t, min, max) {
        const cubicT = cubicEaseInOut(t);
        return min + cubicT * (max - min);
    }
    window.addEventListener('resize', resizeCanvas);
  
    function resizeCanvas() {
      // Set the canvas dimensions based on the container size
      canvas.width = canvasContainer.offsetWidth+80;
      canvas.height = canvasContainer.offsetHeight;
      grassAmount = (canvas.width/grassWidth)+3;
    }


    let grassTip = 20;
    let grassTip2 = 20
    const grassWidth = 40;
    let t = 0; // Initialize time variable
    let t2 = .2;
    let increment = 0.005; // Initial increment value
    let increment2 = 0.005; // Initial increment value
    let grassAmount = (canvas.width/grassWidth)+1;
  
    function Draw() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Calculate the eased value for grassX
        grassTip = easeInOut(t, 0, 40);
        grassTip2 = easeInOut(t2, 0, 40)
        // Starting point (top vertex)
        ctx.beginPath();
        ctx.moveTo(grassTip2+20, 0);
        for(var i = 0; i<=grassAmount;i++){
            ctx.quadraticCurveTo(grassWidth*i+30, 180, grassWidth*i+20, 280);
            ctx.quadraticCurveTo(grassWidth*i+50, 180, grassWidth*i+grassTip2+20, 0);
            //ctx.quadraticCurveTo(grassWidth*i+50, 200, grassWidth*i, 280);
        }
        
        /*ctx.quadraticCurveTo(grassX+10, 200, grassX+20, 280);
        ctx.quadraticCurveTo(grassX+50, 200, grassTip+45, 0);*/
        ctx.quadraticCurveTo(grassWidth*(grassAmount+1)+10, 180, grassWidth*(grassAmount+1), 300);
        ctx.lineTo(20, 300)
        ctx.lineTo(20, 280)
        ctx.quadraticCurveTo(50, 180, grassTip2+20, 0);
        ctx.closePath();
    
        // Fill and stroke styles
        ctx.fillStyle = '#409975';
        ctx.strokeStyle = '#409975';
    
        // Fill and stroke the triangle
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        
        // Starting point (top vertex)
        ctx.beginPath();
        ctx.moveTo(grassTip, 0);
        for(var i = 0; i<=grassAmount;i++){
            ctx.quadraticCurveTo(grassWidth*i+10, 180, grassWidth*i, 280);
            ctx.quadraticCurveTo(grassWidth*i+30, 180, grassWidth*i+grassTip, 0);
            //ctx.quadraticCurveTo(grassWidth*i+50, 200, grassWidth*i, 280);
        }
        
        /*ctx.quadraticCurveTo(grassX+10, 200, grassX+20, 280);
        ctx.quadraticCurveTo(grassX+50, 200, grassTip+45, 0);*/
        ctx.quadraticCurveTo(grassWidth*(grassAmount+1)+10, 180, grassWidth*(grassAmount+1), 300);
        ctx.lineTo(0, 300)
        ctx.lineTo(0, 280)
        ctx.quadraticCurveTo(30, 180, grassTip, 0);
        ctx.closePath();
    
        // Fill and stroke styles
        ctx.fillStyle = '#58d68d';
        ctx.strokeStyle = '#58d68d';
    
        // Fill and stroke the triangle
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        

        // Increment time and loop it
        t += increment;

        // Switch direction when reaching the bounds
        if (t >= 1 || t <= 0) {
          increment *= -1; // Reverse the direction
        }
        // Increment time and loop it
        t2 += increment2;

        // Switch direction when reaching the bounds
        if (t2 >= 1 || t2 <= 0) {
          increment2 *= -1; // Reverse the direction
        }

        requestAnimationFrame(Draw)
    }
    
    Draw();
    
    
  })