// lightdarkmode.js

// Constants to handle mode
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';


// function getElementId()
function getElementId(id) {
    return document.getElementById(id);
}

// Add const to handle HTML Elements:
const toggleSwitch = document.querySelector('input[type="checkbox"]');

//const nav = document.getElementById('nav');
const nav = getElementId('nav');
//const toggleIcon = document.getElementById('toggle-icon');
const toggleIcon = getElementId('toggle-icon');
//const image1 = document.getElementById('image1');
const image1 = getElementId('image1');
//const image2 = document.getElementById('image2');
const image2 = getElementId('image2');
//const image3 = document.getElementById('image3');
const image3 = getElementId('image3');
//const textBox = document.getElementById('text-box');
const textBox = getElementId('text-box');

// Function toggleDarkLightMode replaces function darkMode() and function lightMode()
// function toggleDarkLightMode(isDark) {
function toggleDarkLightMode(mode) {
    if (mode === DARK_THEME) { isDark = true} else {isDark = false};
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark ?  'rgb(255 255 255 / 50%)': 'rgb(0 0 0 / 50%)';
    // note that there are multiple child items (Span and Icon elements) in this HTML element
    //console.log(toggleIcon.children);
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';

    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    isDark ? imageMode(DARK_THEME) : imageMode(LIGHT_THEME);
}

// Dark Mode Styles
// function darkMode() {
//     nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
//     textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
//     // note that there are multiple child items (Span and Icon elements) in this HTML element
//     //console.log(toggleIcon.children);
//     imageMode('dark');
//     toggleIcon.children[0].textContent = 'Dark Mode';
//     //toggleIcon.children[1].classList.remove('fa-sun');
//     //toggleIcon.children[1].classList.add('fa-moon');
//     toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
//     //image1.src = 'img/undraw_proud_coder_dark.svg';
//     //image2.src = 'img/undraw_feeling_proud_dark.svg';
//     //image3.src = 'img/undraw_conceptual_idea_dark.svg';
// }

// Light Mode Styles
// function lightMode() {
//     nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
//     textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
//     // note that there are multiple child items (Span and Icon elements) in this HTML element
//     //console.log(toggleIcon.children);
//     imageMode('light');
//     toggleIcon.children[0].textContent = 'Light Mode';
//     //toggleIcon.children[1].classList.remove('fa-moon');
//     //toggleIcon.children[1].classList.add('fa-sun');
//     toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
//     //image1.src = 'img/undraw_proud_coder_light.svg';
//     //image2.src = 'img/undraw_feeling_proud_light.svg';
//     //image3.src = 'img/undraw_conceptual_idea_light.svg';
// }

// Function imageMode
// use Template Strings to toggle images between modes
function imageMode(mode) {
    image1.src = `img/undraw_proud_coder_${mode}.svg`;
    image2.src = `img/undraw_feeling_proud_${mode}.svg`;
    image3.src = `img/undraw_conceptual_idea_${mode}.svg`;
}

// Switch Theme dynamically
function switchTheme(event) {
    //console.log(event.target.checked);
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', DARK_THEME);
        // persist mode choice to Window.localStorage
        localStorage.setItem('theme', DARK_THEME);
        // toggleDarkLightMode(true);
        toggleDarkLightMode(DARK_THEME);
        //darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', LIGHT_THEME);
        // persist mode choice to Window.localStorage
        localStorage.setItem('theme', LIGHT_THEME);
        //toggleDarkLightMode(false);
        toggleDarkLightMode(LIGHT_THEME);
        //lightMode();
    }
}

// Event Listener when a chekckbox is changed
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage for Theme
const currentTheme = localStorage.getItem('theme');
//console.log(currentTheme);
// check for item's existence before retrieving from Local Storage
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === DARK_THEME) {
        toggleSwitch.checked = true;
        //darkMode();
        //toggleDarkLightMode(true);
        toggleDarkLightMode(DARK_THEME);
    }
}