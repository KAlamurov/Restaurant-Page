import homeImage from './food.jpg';
import beerImage from './Beer.jpg';

const loadPage = () => {

    const div = document.createElement('div');
    div.id = "intro";
    document.body.appendChild(div);

    const contentDiv = document.getElementById('intro');
    const heading = document.createElement('h1');
    const paragraph1 = document.createElement('p');
    const paragraph2 = document.createElement('p');
    const paragraph3 = document.createElement('p');
    const paragraph4 = document.createElement('p');

    heading.textContent = "Restaurant Odin";
    contentDiv.appendChild(heading);
    const foodImage = new Image();
    foodImage.src = homeImage;
    foodImage.setAttribute("id","dinner");
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
    contentDiv.appendChild(beer);
}

export default loadPage;