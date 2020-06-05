// Slider .js
// Flirt variables as usually
// Our images will be in an array so first variable of slides array with objects where each of the objects will have the path to the image and both texts inside
const slideList = [{
        img: './projects-photos/1.ciekawi-historii.jpg',
        title: 'Ciekawi Historii',
        shortDescription: 'Prosta strona WWW stworzona z wykorzystaniem jQuery, Bootstrap i Firebase.',
    },
    {
        img: './projects-photos/2.jednoręki-bandyta.jpg',
        title: 'Jednoręki bandyta',
        shortDescription: 'Prosta gierka w jednorękiego bandytę',
    },
    {
        img: './projects-photos/3.git-data-searcher.jpg',
        title: 'Git data Searcher',
        shortDescription: 'Wyszukiwarka podstawowych danych użytkownika git',
    },
    {
        img: './projects-photos/4.activity-planner.jpg',
        title: 'Activity Planner',
        shortDescription: 'Jest to planer aktywności stworzony we Vue.js',
    },
    {
        img: './projects-photos/5.yacht-charter.jpg',
        title: 'Czarter Jachtów',
        shortDescription: 'Zaawansowana aplikacja stworzona dla ludzi chcących wyczarterować jacht, i dla ludzi, którzy chcą zostać czarterującymi.',
    },
];

// Now we can set time needed to slide automatic chaange
let slideTime = 5000;
// Object index
let activeSlide = 0; // we already have information about the image in our html
// Time for changeble items to declare as variables
// image
const singleImage = document.querySelector('img.slider');
// Title
const projectTitle = document.querySelector('.slide-title ');
// Short description
const projectDescriptionShort = document.querySelector('.slide-description ');
// Indicators variable - collecting to array /nodeList of singular elements/indicators and we need to exchange it for casual array because the check method we want to use is not availible for nodeList so we need to use the square brqackets and spread operator to do that
const indicators = [...document.querySelectorAll('.indicators-dots span')];
//---------------------------

// Functions:
//1b. Change Slides on arrow press
const changeSlidesOnArrows = (e) => {
        // disable interval to not working during the key press
        // clearInterval(slideInterval); // it will be exxecuted after keypress
        // //Set the slide on keypress
        // slideTime = 10000;
        // for check
        // now statement - first if any of defined keys was clicked or not and what to do if it was clicked
        if (e.keyCode === 37 || e.keyCode === 39) {
            // now we need to clear for a second the interval -  to start counting from the beginning
            clearInterval(slideInterval);
            // now thanks to ternary operator we can define the behaviour dependend of the key pressed
            e.keyCode === 37 ? activeSlide-- : activeSlide++;
        }
        // Second condition which prevents to incrementing the infinite times of time
        if (activeSlide === slideList.length) {
            activeSlide = 0;
        } else if (activeSlide < 0) {
            activeSlide = slideList.length - 1;
        }
        // what to do on it - repeate of main function
        singleImage.src = slideList[activeSlide].img;
        projectTitle.innerHTML = slideList[activeSlide].title;
        projectDescriptionShort.innerHTML = slideList[activeSlide].shortDescription;
        changeIndicator();
        slideInterval = setInterval(slideChange, slideTime);
    }
    // 1a.Function which chqanges classes on the indicarors
const changeIndicator = () => {
        // just for check
        // console.log('zmiana');
        // first we can check which indicator has the active class with method findIndex and callbacks boolean value
        //So if the indicator contains/has specified class returns true and we can use the variavle for that, 
        // It will alvays then returns the element only with class active
        const activeIndicator = indicators.findIndex(el => el.classList.contains('active'));
        // So if we have that element we can now toggle the class active for ''
        indicators[activeIndicator].classList.remove('active');
        // and now we can use our slider active index to add the class active to specified element
        indicators[activeSlide].classList.add('active');
    }
    // 1. Function which will change the slides
const slideChange = () => {
    // now we need to define statement when the slider should begin from the begining, but because we firstly incrementing index we need to start from the index -1 because we firstly incrementing it to '0'.
    if (activeSlide >= slideList.length - 1) activeSlide = -1;
    //just because we have already the first element with index 0 displayed than we can start the function from incrementing index
    activeSlide++;
    // Now we can call the values of objects like that
    // image
    singleImage.src = slideList[activeSlide].img;
    //title
    projectTitle.innerHTML = slideList[activeSlide].title;
    // Short description
    projectDescriptionShort.innerHTML = slideList[activeSlide].shortDescription;

    // here we can implement the funcion which change the indicator
    changeIndicator();
}

//Function to change slide on click
function switchSlide(e) {
    if(e){
        console.log(e)
        clearInterval(slideInterval);
        activeSlide = Number(e.target.id)-1;
        singleImage.src = slideList[activeSlide].img;
        projectTitle.innerHTML = slideList[activeSlide].title;
        projectDescriptionShort.innerHTML = slideList[activeSlide].shortDescription;
        changeIndicator();
        slideInterval = setInterval(slideChange, slideTime);
    }
    
}

// Now implementation

// Set intervas can be implemented here
let slideInterval = setInterval(slideChange, slideTime);


//1b. If we click onthe element we will call the EventListenet on keypress
window.addEventListener('keydown', changeSlidesOnArrows);
//atach function to span
let s = document.querySelector('.indicators-dots').childNodes;//.getElementsByTagName('SPAN');
if(s){
    s.forEach(element => {
        if(element.nodeName=='SPAN'){
            element.addEventListener('click',switchSlide,false);
        }
    });
}
