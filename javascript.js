
  document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function(e) {
      let ripple = document.createElement('div');
      ripple.classList.add('ripple');
      this.appendChild(ripple);
      
      let x = e.clientX - e.target.offsetLeft;
      let y = e.clientY - e.target.offsetTop;
      
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      
      setTimeout(() => {
        ripple.remove();
      }, 1000);
    });
  });
  
  // Add search functionality
  document.querySelector('.search-box').addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
      const searchTerm = this.value.toLowerCase().trim();
      if (searchTerm) {
        // Collect all video titles
        const videos = document.querySelectorAll('.video-title');
        let found = false;
        
        videos.forEach(video => {
          const title = video.textContent.toLowerCase();
          if (title.includes(searchTerm)) {
            found = true;
            // Scroll to the first matching video
            video.closest('.video-container').scrollIntoView({ 
              behavior: 'smooth',
              block: 'center'
            });
            // Highlight the found video
            video.closest('.video-container').style.transform = 'scale(1.05)';
            setTimeout(() => {
              video.closest('.video-container').style.transform = 'scale(1)';
            }, 1000);
            return;
          }
        });
        
        if (!found) {
          // Redirect to search results page
          window.location.href = `https://www.youtube.com/search?q=${encodeURIComponent(searchTerm)}`;
        }
      }
    }
  });
  
  const toggleSwitch = document.querySelector('#checkbox');
  const currentTheme = localStorage.getItem('theme');
  
  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
      toggleSwitch.checked = true;
    }
  }
  
  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }
  
  toggleSwitch.addEventListener('change', switchTheme, false);
  
  document.addEventListener('DOMContentLoaded', function() {
    // Handle video loading errors
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      video.addEventListener('error', function() {
        this.closest('.video-frame').innerHTML = `
          <div style="
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f0f0f0;
            color: #666;
          ">
            Video unavailable
          </div>
        `;
      });
    });
  });
  
/* hamburger java script hai*/
  document.querySelector('.hamburger-menu').addEventListener('click', function() {
      this.classList.toggle('active');
      document.querySelector('.menu-bar').classList.toggle('active');
      document.querySelector('.menu-overlay').classList.toggle('active');
    });
    
    // Add click handler for the overlay
    document.querySelector('.menu-overlay').addEventListener('click', function() {
      document.querySelector('.hamburger-menu').classList.remove('active');
      document.querySelector('.menu-bar').classList.remove('active');
      this.classList.remove('active');
    });
    
    // Add this JavaScript event handler for the close button
    document.querySelector('.close-button').addEventListener('click', function() {
      document.querySelector('.hamburger-menu').classList.remove('active');
      document.querySelector('.menu-bar').classList.remove('active');
      document.querySelector('.menu-overlay').classList.remove('active');
    });

