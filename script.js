const Title = document.getElementById('Title'); 
function setTitle(x) {
    Title.textContent = x; 
}

const Description = document.getElementById('Description'); 
function setDescription(x) {
    Description.textContent = x; 
}

const BackgroundColor = document.getElementById('BackgroundColor'); 
function setBackgroundColor(x) {
    BackgroundColor.style.backgroundColor = x; 
}

const FontColor = document.getElementById('color'); 
function setFontColor(x) {
    FontColor.style.color = x; 
}

const light = document.querySelector('.light-mode')
const dark = document.querySelector('.dark-mode')

function setTheme(x) {
    if (x = "light-mode") {
        BackgroundColor.classList.add('light-mode') 
    }

    else if (x = "dark-mode") {
        BackgroundColor.classList.add = ('dark-mode') 
    }

}




//replace text content 
//document.getElementById('Title').innerHTML = 'Console Controller';
//document.getElementById('Description').innerHTML = 'Filler text, description text, blah blah blah.';


// make the light/dark mode button work
function myFunction() {
    const element = document.body;
    element.classList.toggle("dark-mode");
  }
