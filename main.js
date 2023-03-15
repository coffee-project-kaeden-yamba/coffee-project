"use strict"
//////////// START MOBILE MENU ///////////
let pageWrapper = document.querySelector('.page-wrapper');
let toggleMenu = document.querySelector('.das-burger-wrapper');
let menuBg = document.querySelector('.mobile-menu-overlay');
toggleMenu.addEventListener('click', function(){
    pageWrapper.classList.toggle('mobile-menu-open');
});
menuBg.addEventListener('click', function(){
    pageWrapper.classList.toggle('mobile-menu-open');
});
//////////// END MOBILE MENU ///////////

//////////// START DROPDOWNS ///////////
let dropdowns = document.querySelectorAll('[data-dropdown="parent"]');
dropdowns.forEach(function(dropdown){
    let toggle = dropdown.querySelector('[data-dropdown="toggle"]');
    toggle.addEventListener('click', function(){
        dropdowns.forEach(function(element){
            // if already has class of open and is not this element, remove it
            if (element.classList.contains('open') && element !== dropdown) {
                element.classList.remove('open');
            }
        })
        dropdown.classList.toggle('open');
    });
});
pageWrapper.addEventListener('click', function(event){
    //if the event target is not a dropdown, close all dropdowns
    if (!event.target.closest('[data-dropdown="parent"]')) {
        dropdowns.forEach(function(dropdown){
            dropdown.classList.remove('open');
        });
    }
});
//////////// END DROPDOWNS ///////////

// Displays Coffee onh HTML by name and roast type
function renderCoffee(coffee) {
    let html = '<div class="coffee">';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

// Loops through the coffees array list
function renderCoffees(coffees) {
    let html = '';
    for(let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// Allows your roast input to display coffees with that particular roast input
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } if (selectedRoast === 'all') {
            filteredCoffees.push(coffee)
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}


// COFFEES ARRAY
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];
// Sort coffees by id in ascending order
coffees.sort(function(a, b) {
    return a.id - b.id;
});

let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');

let lightOption = document.querySelector('#roast-selection ');
console.log(lightOption.value)
lightOption.addEventListener('change', updateCoffees );

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

// Create a query selector to gather information inputted into Add Coffee

// Create a function to compile information into an object

// Have it put the information into the array by ID number

// Create a function to add that given object into the array



function addCoffee() {
    let newCoffeeName = document.querySelector('#newCoffeeName').value;
    let newCoffeeRoast = document.querySelector('#newCoffeeRoast').value;
    let coffee = {id: coffees.length + 1, name: newCoffeeName, roast: newCoffeeRoast}
    document.querySelector('#newCoffeeName').value = '';
    document.querySelector('#newCoffeeRoast').value = '';
    coffees.push(coffee);
    console.log('Coffees array: ', coffees)
}

document.querySelector('#submit').addEventListener('click',addCoffee)