
const menuItems = () => {

const container = document.createElement('div');
container.setAttribute("id","container");

const homeButton = document.createElement('button');
    homeButton.textContent = "Home";
    homeButton.addEventListener('click', (event) => location.reload());

const foodButton = document.createElement('button');
    foodButton.textContent = "Food";
    //foodButton.addEventListener('click', showTabs('food'));

const drinkButton = document.createElement('button');
    drinkButton.textContent = "Drinks";
    //drinkButton.onclick = showTabs('drink');

const contactButton = document.createElement('button');
    contactButton.textContent = "Contact";
    //contactButton.onclick = showTabs('contact');

container.appendChild(homeButton);
container.appendChild(foodButton);
container.appendChild(drinkButton);
container.appendChild(contactButton);
document.body.appendChild(container);

}
export default menuItems;