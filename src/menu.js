const menuItems = () => {

const container = document.createElement('div');
container.setAttribute("id","container");

const homeButton = document.createElement('button');
homeButton.textContent = "Home";

const foodButton = document.createElement('button');
    foodButton.textContent = "Food";

const drinkButton = document.createElement('button');
    drinkButton.textContent = "Drinks";

const contactButton = document.createElement('button');
    contactButton.textContent = "Contact";

container.appendChild(homeButton);
container.appendChild(foodButton);
container.appendChild(drinkButton);
container.appendChild(contactButton);
document.body.appendChild(container);

}
export default menuItems;