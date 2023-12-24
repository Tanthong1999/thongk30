function hienThongBao() {
    alert("<3");
  }

  function diChuyenNo() {
  
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    var newLeft = Math.random() * (screenWidth - 100); 
    var newTop = Math.random() * (screenHeight - 30);  


    document.getElementById("noButton").style.left = newLeft + "px";
    document.getElementById("noButton").style.top = newTop + "px";
  }
