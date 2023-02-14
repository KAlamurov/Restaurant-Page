export function showFood() {

    const selectContent = document.querySelectorAll(".tabcontent");
    selectContent.forEach(content => {
        content.remove();
    });

    const contentDiv = document.getElementById('intro');
    const foodTab = document.createElement('div');
    foodTab.setAttribute("id", "food");
    foodTab.setAttribute("class", "tabcontent");
    foodTab.textContent = "Food here..";
    contentDiv.appendChild(foodTab);
}