
let foodApp = document.querySelector('.headerH4');
let active = document.querySelector('.headerH1');
let headerP = document.querySelector('.headerP');
let headerBtns = document.querySelector('.header-btns');


function headerBtnsActiv() {
  headerBtns.classList.add('headerActiv');
}

function activH4() {
    foodApp.classList.add('active');
  }
function activH1() {
    active.classList.add('active');
  }
  function activP() {
    headerP.classList.add('active');
  }

  setTimeout(activH4, 1000);
  setTimeout(activH1, 2000);
  setTimeout(activP, 3000);
  setTimeout(headerBtnsActiv, 4000);
