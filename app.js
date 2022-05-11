const hamburgerMenu = document.getElementById('hamburgerMenu');
const navDisplay = document.getElementById('navDisplay');


const popNavDisplay = () => {
    navDisplay.classList.toggle('active');
}

hamburgerMenu.addEventListener('click' , popNavDisplay);