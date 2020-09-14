// lightdarkmode.js

// Add const to handle HTML Elements:
const toggleSwitch = document.querySelector('input[type="checkbox"]');

// Switch Theme dynamically
function switchTheme(event) {
    //console.log(event.target.checked);
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}



// Event Listener when a chekckbox is changed
toggleSwitch.addEventListener('change', switchTheme);