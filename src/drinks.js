
export function showDrink() {

    const selectContent = document.querySelectorAll(".tabcontent");
    selectContent.forEach(content => {
        content.remove();
    });

    const contentDiv = document.getElementById('intro');
    const drinkTab = document.createElement('div');
    drinkTab.setAttribute("id", "drink");
    drinkTab.setAttribute("class", "tabcontent");
    drinkTab.textContent = "Drinks here...";
    contentDiv.appendChild(drinkTab);
}
