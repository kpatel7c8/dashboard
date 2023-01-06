window.onload = () => toggleMobileNav();
window.onresize = () => toggleMobileNav();

function toggleMobileNav() {
  const nav = document.getElementsByTagName('nav')[0];
  const navText = document.getElementsByClassName('navText');
  const main = document.getElementsByTagName('main')[0];
  
  nav.style.zIndex = "1";
  main.style.zIndex = "0";
  
  if(window.innerWidth < 970) {
    
    let widthOfMain = getComputedStyle(main).width.substring(0, getComputedStyle(main).width.indexOf('px'));

    nav.addEventListener('click',() => {
      nav.style.width = '200px';
      nav.style.cursor = "auto";
      main.style.filter = "blur(1px)";
      for (let i = 0; i < navText.length; i++) {
        navText[i].style.display = 'block';
      }
    });
    
    nav.addEventListener('mouseleave',() => {
      nav.style.width = '65px';
      nav.style.cursor = "ew-resize";
      main.style.filter = "blur(0)";
      for (let i = 0; i < navText.length; i++) {
        navText[i].style.display = 'none';
      }
    });
  } else {
    nav.style.width = '200px';
    nav.style.cursor = "auto";
    main.style.filter = "blur(0)";
    for (let i = 0; i < navText.length; i++) {
      navText[i].style.display = 'block';
    }  
  }
}