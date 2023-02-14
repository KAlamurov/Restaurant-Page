import homeImage from './food.jpg';
import beerImage from './Beer.jpg';
import { showFood } from './food';
import { showDrink } from './drinks';
import { showContact } from './contact';

const loadHome = () => {

    const container = document.createElement('div');
    container.setAttribute("id", "container");

    const homeButton = document.createElement('button');
    homeButton.textContent = "Home";
    homeButton.addEventListener("click", event => location.reload());

    const foodButton = document.createElement('button');
    foodButton.textContent = "Food";
    foodButton.addEventListener("click", event => showFood());

    const drinkButton = document.createElement('button');
    drinkButton.textContent = "Drinks";
    drinkButton.addEventListener("click", event => showDrink());

    const contactButton = document.createElement('button');
    contactButton.textContent = "Contact";
    contactButton.addEventListener("click", event => showContact());

    container.appendChild(homeButton);
    container.appendChild(foodButton);
    container.appendChild(drinkButton);
    container.appendChild(contactButton);
    document.body.appendChild(container);

    const div = document.createElement('div');
    div.id = "intro";
    document.body.appendChild(div);

    const contentDiv = document.getElementById('intro');

    const heading = document.createElement('h1');
    heading.setAttribute("class", "tabcontent");
    heading.textContent = "Restaurant Odin";
    contentDiv.appendChild(heading);

    const paragraph1 = document.createElement('p');
    const paragraph2 = document.createElement('p');
    const paragraph3 = document.createElement('p');
    const paragraph4 = document.createElement('p');

    paragraph1.setAttribute("class", "tabcontent");
    paragraph2.setAttribute("class", "tabcontent");
    paragraph3.setAttribute("class", "tabcontent");
    paragraph4.setAttribute("class", "tabcontent");


    const foodImage = new Image();
    foodImage.src = homeImage;
    foodImage.setAttribute("id","dinner");
    foodImage.setAttribute("class", "tabcontent");
    contentDiv.appendChild(foodImage);

    paragraph1.textContent = "Restaurant Odin combines flavors & inspiration from the Far East & the West to create what we think is the best!";
    paragraph2.textContent = "We specialize in pizzas, as well as handmade appetizers, sandwiches, salads, and gluten friendly, vegetarian, & vegan selections.";
    paragraph3.textContent = "Feel free to indulge in a tiki drink or craft beer with our fantastic unique cuisine.";
    paragraph4.textContent = "Cheers!";
    contentDiv.appendChild(paragraph1);
    contentDiv.appendChild(paragraph2);
    contentDiv.appendChild(paragraph3);
    contentDiv.appendChild(paragraph4);
    
    const beer = new Image();
    beer.src = beerImage;
    beer.setAttribute("id","beer");
    beer.setAttribute("class", "tabcontent");
    contentDiv.appendChild(beer);
}

export default loadHome;