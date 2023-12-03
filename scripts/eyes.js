window.addEventListener('DOMContentLoaded', (event) =>{


    let canvas = document.getElementById("grass");
    let canvasContainer = document.querySelector(".grass");
    canvas.width = canvasContainer.offsetWidth;
    canvas.height = canvasContainer.offsetHeight;
    let ctx = canvas.getContext('2d');
    canvas.style.background = "transparent";

    const grassBlades = [];
    const numBlades = 1000;


    function drawCurvedTriangle2(x, y, baseLength, height, curveHeight) {
        const halfBase = baseLength / 2;
        const topY = y - height;

        ctx.beginPath();

        // Move to the starting point
        ctx.moveTo(x - halfBase, y);

        // Draw the left curved side
        ctx.quadraticCurveTo(x - halfBase / 2, topY - curveHeight, x, topY);

        // Draw the flat base
        ctx.lineTo(x + halfBase, y);

        // Draw the right curved side
        ctx.quadraticCurveTo(x + halfBase / 2, topY - curveHeight, x - halfBase, y);

        // Close the path to form a closed shape
        ctx.closePath();

        // Fill or stroke the path as needed
        ctx.fillStyle = '#58d68d';
        ctx.fill();
    }
    function drawCurvedTriangle(x, y, baseLength, height, curveHeight) {
        const halfBase = baseLength / 2;
        const topY = y - height;

        ctx.beginPath();

        // Move to the starting point
        ctx.moveTo(x - halfBase, y);

        // Draw the left curved side
        ctx.quadraticCurveTo(x - halfBase / 2, topY - curveHeight, x, topY);

        // Draw the flat base
        ctx.lineTo(x + halfBase, y);

        // Draw the right curved side
        ctx.quadraticCurveTo(x + halfBase / 2, topY - curveHeight, x - halfBase, y);

        // Close the path to form a closed shape
        ctx.closePath();

        // Fill or stroke the path as needed
        ctx.fillStyle = 'blue';
        ctx.fill();
    }
    function drawCurvedTriangle() {
        // Starting point (top vertex)
        ctx.beginPath();
        ctx.moveTo(100, 100);
        ctx.quadraticCurveTo(150, 50, 200, 100);
        ctx.quadraticCurveTo(150, 150, 100, 100);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
         // Starting point (top vertex)
         ctx.beginPath();
         ctx.moveTo(200, 100);
         ctx.quadraticCurveTo(250, 75, 300, 100);
         ctx.quadraticCurveTo(250, 125, 300, 100);
         ctx.closePath();
         ctx.fill();
         ctx.stroke();
    
        // Fill and stroke styles
        ctx.fillStyle = 'lightblue';
        ctx.strokeStyle = 'blue';
    
        // Fill and stroke the triangle
        ctx.fill();
        ctx.stroke();
      }
      drawCurvedTriangle();
      // Example: Draw a curved triangle
      //drawCurvedTriangle(100, 100, 200, 50, 150, 200, 20);
      //drawCurvedTriangle2(300, 300, 200, 100, 150, -50);
    
  })