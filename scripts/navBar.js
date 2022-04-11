
//close menu if clicked off of.//////////////////////
const menuButton = document.querySelector('.menu-toggle');
const navContainer = document.querySelector('.navbar');
const navList = document.querySelector('.nav-links');

var activeElements;

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('is-active');
    navContainer.classList.toggle('is-active');
    navList.classList.toggle('is-active');
    activeElements = document.getElementsByClassName('is-active');
})

window.addEventListener('resize', () => {
    if(window.innerWidth > 1000){

        try{
            for(let i = 0; i < activeElements.length; i++){
                activeElements[i].classList.remove('is-active');
            }
        } catch(error){
        return;
        }
    }
})

document.addEventListener('click', (evt) =>{
    let target = evt.target;
    
    let ignorelist = Array.from(document.querySelectorAll('nav *'));
    let match = false;
    for(let i = 0; i < ignorelist.length; i++){
        if(target == ignorelist[i]){
            match = true;
        }
    }
    if(match){
            return;
        } else {
            let ae = Array.from(document.querySelectorAll('.is-active'));
            try{
                for(let i = 0; i < ae.length + 1; i++){
                    ae[i].classList.remove('is-active');
                    
                }
            } catch(error){
                
                return;
            }
        }
});



//dark mode toggle//////////////////////

const darkModeButton = document.querySelector(".dark-toggle");
var darkModeActive = false;
const lightColors = ['#fa4b4b','#f0eff5','#a81a1a','#68190e','#000000', 'hsla(250, 23%, 95%, 0.65)'];
const darkColors = ['#f7d6d6','#301e1e','#fc7878','#eb796a','#f0eff5', 'hsla(0, 23%, 15%, 0.65)'];
const logo = document.querySelector('.nav-title');
const darkButton = document.querySelector('.dark-toggle')

function toggleDarkmode(){
    let root = document.querySelector(':root');

    if(darkModeActive){
        darkModeActive = false;

        logo.classList.remove('dark');
        darkButton.classList.remove('dark');
        root.style.setProperty('--main-color', lightColors[0]);
        root.style.setProperty('--background-color', lightColors[1]);
        root.style.setProperty('--trinary-color', lightColors[2]);
        root.style.setProperty('--secondary-color', lightColors[3]);
        root.style.setProperty('--text-color', lightColors[4]);
        root.style.setProperty('--faded-background-color', lightColors[5]);
        sessionStorage.setItem('darkMode', 'false')
        
    } else{
        darkModeActive = true;

        logo.classList.add('dark');
        darkButton.classList.add('dark');
        root.style.setProperty('--main-color', darkColors[0]);
        root.style.setProperty('--background-color', darkColors[1]);
        root.style.setProperty('--trinary-color', darkColors[2]);
        root.style.setProperty('--secondary-color', darkColors[3]);
        root.style.setProperty('--text-color', darkColors[4]);
        root.style.setProperty('--faded-background-color', darkColors[5]);
        sessionStorage.setItem('darkMode', 'true')
    }
}

darkModeButton.addEventListener('click', () =>{
    toggleDarkmode();
})

if(sessionStorage.getItem('darkMode') == 'true'){
    toggleDarkmode();
}