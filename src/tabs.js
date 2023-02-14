const foodTab = document.createElement('div');
const drinkTab = document.createElement('div');
const contactTab = document.createElement('div');
const intro = document.getElementById('intro');

foodTab.setAttribute("id", "food");
foodTab.setAttribute("class", "tabcontent");
foodTab.textContent = "Food here..";

drinkTab.setAttribute("id", "drink");
drinkTab.setAttribute("class", "tabcontent");
drinkTab.textContent = "Drinks here...";

contactTab.setAttribute("id", "contact");
contactTab.setAttribute("class", "tabcontent");
contactTab.textContent = "Contact us here...";

export default function showTabs(tab) {

    let i = 0;
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    document.getElementById(tab).style.display = "block";
}