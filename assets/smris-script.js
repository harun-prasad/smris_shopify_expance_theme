// Scripts

 window.oncontextmenu = function () {
 
  // Disable Right Click
  document.ondragstart = function () {
    return false;
  }

  function nocontext(e) {
    return false;
  }
  document.oncontextmenu = nocontext;


  // Disable View Source
  document.onkeydown = function (e) {
    if (e.ctrlKey
      && (e.keyCode === 67
        || e.keyCode === 86
        || e.keyCode === 85
        || e.keyCode === 117)) {
      return false;
    } else {
      return true;
    }
  };

  $(document).keypress("u", function (e) {
    if (e.ctrlKey) {
      return false;
    } else {
      return true;
    }
  });

  // Disable F12 Key
  $(document).keydown(function (event) {
    if (event.keyCode == 123) {
      return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
      return false;
    }
  });

  $(document).on("contextmenu", function (e) {
    e.preventDefault();
  });

}
// End Script