function showHiddenNav(x) {
              x.classList.toggle("sandwich-transform");
              menu = document.getElementById("navbar-hidden-nav");
              if (menu.style.display == "none") {
                  menu.style.display = "flex";
              } else {
                  menu.style.display = "none";
              }
            }



document.addEventListener('click', function(event) {
  navSandwich = document.getElementById('nav-sandwich');
  var ignoreClickOnMeElement = document.getElementById('navbar-hidden-nav');
    var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
  if (navSandwich.contains(event.target)){
    
  }
    else if (ignoreClickOnMeElement.style.display != "none" && !isClickInsideElement ) {
      navSandwich.classList.toggle("sandwich-transform");
      ignoreClickOnMeElement.style.display = "none";
        //Do something click is outside specified element
    }
});