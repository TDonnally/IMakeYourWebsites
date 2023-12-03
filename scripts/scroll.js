window.addEventListener('DOMContentLoaded', (event) =>{
    /*const sections = document.querySelectorAll("body>div");
    let currentSection = 1;
    sections[currentSection].scrollIntoView();
    let lastScrollTop = window.scrollY;
    let paused = false;

    window.addEventListener("scroll", (event)=>{
        if (!paused) {
            let st = window.scrollY;
            console.log("st: ", st);
            console.log("LastScrollTop: ", lastScrollTop);
        
            // Determine the scroll direction
            if (st > lastScrollTop) {
              // Scrolling down
              console.log("Scrolling Down");
              currentSection = Math.min(currentSection + 1, sections.length);
              sections[currentSection-1].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
            } else if(st < lastScrollTop) {
              // Scrolling up
              console.log("Scrolling Up");
              currentSection = Math.max(currentSection - 1, 1);
            }
        
            
        
            // Pause scrolling temporarily to prevent multiple rapid scrolls
            paused = true;
            setTimeout(() => {
                paused = false;
                lastScrollTop = window.scrollY;
              // Update the last scroll position

            }, 500); // Adjust the delay as needed
          }
        else{
            event.preventDefault;
        }
    })*/
})