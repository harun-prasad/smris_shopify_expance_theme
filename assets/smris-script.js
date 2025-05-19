// Scripts
  
  // Disable right-click on the entire page
  document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
  });

  // Prevent image dragging
  document.addEventListener('dragstart', function (event) {
    if (event.target.tagName === 'IMG') {
      event.preventDefault();
    }
  });

  // Disable image download via long-press (for mobile)
  document.querySelectorAll('img').forEach(function (img) {
    img.style.pointerEvents = 'none';
  });
 
// End Script