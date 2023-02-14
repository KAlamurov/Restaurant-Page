
export function showContact() {

    const selectContent = document.querySelectorAll(".tabcontent");
    selectContent.forEach(content => {
        content.remove();
    });

    const contentDiv = document.getElementById('intro');
    const contactTab = document.createElement('div');
    contactTab.setAttribute("id", "contact");
    contactTab.setAttribute("class", "tabcontent");
    contactTab.textContent = "Contact us here...";
    contentDiv.appendChild(contactTab);
}