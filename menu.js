const burgerIcon = document.querySelector('.nav__burger');
const navOverlay = document.querySelector('.nav__overlay');
let currentDropdown = navOverlay;

burgerIcon.addEventListener('click', ()=>{
  burgerIcon.classList.toggle('nav__burger--open');

  navOverlay.classList.toggle('nav__overlay--show');
});

navOverlay.addEventListener('click', (e) => {
  e.preventDefault();
  // console.log(e.target.classList.value);
  const currentElement = e.target;

  if (isActive(currentElement, 'nav__parent')) {
    
    const subMenu = currentElement.parentElement.children[1];
    console.log(subMenu);
    if (window.innerWidth < 768) {
      // console.log(subMenu.clientHeight);
      let height = (subMenu.clientHeight == 0)
                    ? subMenu.scrollHeight
                    : 0;
      subMenu.style.height = `${height}px`;
    } else {
      if (!isActive(subMenu, 'nav__inner--show')) {
        closeDropdown(currentDropdown);
      }
      subMenu.classList.toggle('nav__inner--show');

      currentDropdown = subMenu;
    }
  }
});

function isActive(element, string) {
  return element.classList.value.includes(string);
}

function closeDropdown(currentDropdown) {
  if (isActive(currentDropdown, 'nav__inner--show')) {
    currentDropdown.classList.remove('nav__inner--show');
  }
}

window.addEventListener('resize', () => {
  closeDropdown(currentDropdown);

  if (window.innerWidth > 768) {
    const navInners = document.querySelectorAll('.nav__inner');

    navInners.forEach(navInner => {
      navInner.style.height = '';
    });
  }
});