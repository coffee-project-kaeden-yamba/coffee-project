"use strict"

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

// Allow to search coffee by name
let input = document.querySelector('#searchbar')
input.addEventListener('keyup', filter)
function filter() {
    let inputQuery = document.querySelector('#searchbar').value.toLowerCase();
    let filteredCoffees = [];
    coffees.forEach(function (coffee) {
        let name = coffee.name.toLowerCase();
        if (name.includes(inputQuery))  {
            filteredCoffees.push(coffee);
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

// Adding a coffee object to an array through event listener
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