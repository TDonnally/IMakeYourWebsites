window.addEventListener('DOMContentLoaded', (event) =>{


    let canvas = document.getElementById("clouds");
    let canvasContainer = document.querySelector(".clouds");
    canvas.width = canvasContainer.offsetWidth;
    canvas.height = canvasContainer.offsetHeight;
    let ctx = canvas.getContext('2d');
    canvas.style.background = "transparent";

    function Cloud(x, y, scale) {
      this.x = x;
      this.y = y;
      this.velocity =  .8 - scale*.2;
      this.scale = scale;
      if(scale < 2){
        this.color = '#f5f5f5'
      }
      else if(scale >= 2){
        this.color = '#4a9fd4'
      }

      const bubbleYs = [
        this.y + Math.random() * 10 * this.scale,
        this.y + Math.random() * 10 * this.scale,
        this.y + Math.random() * 10 * this.scale,
        this.y + Math.random() * 10 * this.scale
      ];
      const bubbleRadiuses = [
        20 + Math.random() * 40 * this.scale*1.2,
        20 + Math.random() * 40 * this.scale*1.2,
        20 + Math.random() * 40 * this.scale*1.2,
        20 + Math.random() * 40 * this.scale*1.2
      ]
      
      this.draw = function() {
        if(scale < 2){
            // Draw the slanted shadow square
            const shadowWidth = bubbleRadiuses[0] * 2 + bubbleRadiuses[1] + bubbleRadiuses[2] + bubbleRadiuses[3]; // Adjust the width of the shadow as needed
            const shadowHeight = 1000; // Adjust the height of the shadow as needed
            const shadowColor = "rgba(0, 0, 0, 0.05)"; // Adjust the shadow color and opacity as needed

            ctx.save(); // Save the current state of the context

            // Apply shear transformation to slant the square
            ctx.transform(1, 0, .2, 1, this.x - bubbleRadiuses[0], bubbleYs[0] + 10); // Adjust the shear factor (second argument) as needed

            ctx.fillStyle = shadowColor;
            ctx.fillRect(0, 0, shadowWidth, shadowHeight);

            ctx.restore(); // Restore the context to its previous state
          }
       

        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, bubbleYs[0], bubbleRadiuses[0], 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(this.x + bubbleRadiuses[0], bubbleYs[1], bubbleRadiuses[1], 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(this.x + bubbleRadiuses[0] + bubbleRadiuses[1], bubbleYs[2], bubbleRadiuses[2], 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(this.x + bubbleRadiuses[0] + bubbleRadiuses[1] + bubbleRadiuses[2], bubbleYs[3], bubbleRadiuses[3], 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        
      };
    }
  
    const clouds = [];
    for(var i = 0; i<10; i++){
      clouds.push(new Cloud(Math.random() * canvas.offsetWidth, 100 + Math.random() * 175, 1 + Math.random() * 2));
    }
    clouds.sort((a, b) => b.scale - a.scale);
    console.log(clouds);
  
    window.addEventListener('resize', resizeCanvas);
  
    function resizeCanvas() {
      // Set the canvas dimensions based on the container size
      canvas.width = canvasContainer.offsetWidth;
      canvas.height = canvasContainer.offsetHeight;
  
    }
    
    function draw() {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      

      clouds.forEach((cloud, index, object) =>{
        cloud.x -=cloud.velocity;
        if(cloud.x < -1000){
            object.splice(index, 1);
        }
        // Draw a circle
        cloud.draw();
      });
      // Request the next animation frame
      
      requestAnimationFrame(draw);
    }
  
    // Start the animation loop
    draw();

    let intervalId;

    function startCloudsInterval() {
        intervalId = setInterval(() => {
          clouds.push(new Cloud(canvas.offsetWidth + 200, 100 + Math.random() * 175, 1 + Math.random() * 2));
          clouds.sort((a, b) => b.scale - a.scale);
          // Update the last scroll position
        }, 3000); // Adjust the delay as needed
      }
      
    function stopCloudsInterval() {
    clearInterval(intervalId);
    }
    
    // Check page visibility
    function handleVisibilityChange() {
    if (document.visibilityState === "visible") {
        startCloudsInterval();
    } else {
        stopCloudsInterval();
    }
    }
    // Add visibility change event listener
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Start the interval initially
    startCloudsInterval();
  })
  