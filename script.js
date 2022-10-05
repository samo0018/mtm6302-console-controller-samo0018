// targeting the H1 
const Title = document.getElementById('Title'); 
function setTitle(x) {
    Title.textContent = x; 
}

//targeting the p 
const Description = document.getElementById('Description'); 
function setDescription(x) {
    Description.textContent = x; 
}

//targeting the entire body 
const BackgroundColor = document.getElementById('BackgroundColor'); 
function setBackgroundColor(x) {
    BackgroundColor.style.backgroundColor = x; 
}

//targeting the div that only contains text elements (h1/p)
const FontColor = document.getElementById('color'); 
function setFontColor(x) {
    FontColor.style.color = x; 
}

//targeting the 2 theme options

function setTheme(x) {
    if (x = "light") {
        BackgroundColor.classList.add('light-mode')
        BackgroundColor.classList.remove('dark-mode')
    }else if (x = "dark") {
        BackgroundColor.classList.add('dark-mode')
        BackgroundColor.classList.remove('light-mode')
    }
}

// for some reason, passing "dark" doesnt trigger the else if in the console 

//make the light/dark mode button work
function myFunction() {
    const element = document.body;
    element.classList.toggle("dark-mode");
}
