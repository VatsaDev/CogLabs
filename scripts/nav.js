function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("body").style.marginLeft = "250px";
    document.body.style.backgroundColor = "#121212";
  }

  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("body").style.marginLeft = "0";
    document.body.style.backgroundColor = "#121212";
  }