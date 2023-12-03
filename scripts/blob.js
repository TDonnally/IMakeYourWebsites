window.addEventListener('DOMContentLoaded', (event) =>{


  let canvas = document.getElementById("blobs");
  let canvasContainer = document.querySelector(".blobs");
  canvas.width = canvasContainer.offsetWidth;
  canvas.height = canvasContainer.offsetHeight;
  let ctx = canvas.getContext('2d');
  canvas.style.background = "#f5f5f5";
  const colors = ['#333333', /*'#f5f5f5',*/ '#58d68d', '#2980b9'];
  // Target point for gravity
  const target = { x: canvas.width / 2 + 100, y: canvas.height / 2 };

  // Gravity strength
  const gravity = .1;
  const gridSize = 200; // Adjust this to set the grid size
  let dampeningZone = 6;

  let x = 0;
  function Circle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = { x: 0, y: 0 };
    this.damping = 0.98; // Damping factor (0.98 means 2% reduction in velocity per frame)
    this.blur = 10;

    this.draw = function() {
      ctx.shadowColor = this.color;
      //ctx.shadowBlur = this.blur;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
    };
  }

  const circles = [];
  for(var i = 0; i<60; i++){
    circles.push(new Circle(Math.random() * canvas.offsetWidth, Math.random() * canvas.offsetHeight, 20 + Math.random() * 40, colors[Math.floor(Math.random() * colors.length)]))
  }

  canvas.addEventListener('mousemove', handleMouseMove);
  canvas.addEventListener('mouseleave', handleMouseLeave);
  window.addEventListener('resize', resizeCanvas);

  function resizeCanvas() {
    // Set the canvas dimensions based on the container size
    canvas.width = canvasContainer.offsetWidth;
    canvas.height = canvasContainer.offsetHeight;

  }

  function draw() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Draw vertical lines
    for (let x = 0; x <= canvas.width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }

    // Draw horizontal lines
    for (let y = 0; y <= canvas.height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    circles.forEach((circle) =>{
      // Calculate the distance between the circle and the target
      const dx = target.x - circle.x;
      const dy = target.y - circle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      //Update blur
      /*if(distance > 100){
        circle.blur = 10 + distance/25;
      }*/
      

      // Calculate the gravitational force components
      const forceX = (dx / distance) * gravity;
      const forceY = (dy / distance) * gravity;

      // Update the velocity based on gravity
      circle.velocity.x += forceX;
      circle.velocity.y += forceY;

      if(circle.velocity.x>dampeningZone){
        circle.velocity.x *= circle.damping;
      }
      if(circle.velocity.y>dampeningZone){
        circle.velocity.y *= circle.damping;
      }

      // Update the position based on velocity
      circle.x += circle.velocity.x;
      circle.y += circle.velocity.y;
      
      // Draw a circle
      circle.draw();
    });
    // Request the next animation frame
    
    requestAnimationFrame(draw);
  }

  // Start the animation loop
  draw();

  function handleMouseMove(event) {
    // Get mouse coordinates relative to the canvas
    dampeningZone = 2;
    target.x = event.offsetX;
    target.y = event.offsetY;
  }
  function handleMouseLeave(event) {
    dampeningZone = 6;
    target.x = event.target.offsetWidth/2 + 100;
    target.y = event.target.offsetHeight/2;
  }
})