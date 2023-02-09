import Icon from './img.jpeg';
const loadPage = () => {
    const div = document.createElement('div');
    div.id = "content";
    document.body.appendChild(div);
    const contentDiv = document.getElementById('content');
    const heading = document.createElement('h1');
    const paragraph = document.createElement('p');
    const image = document.createElement('img');

    heading.textContent = "Chinese Restaurant Zhu-Su";
    paragraph.textContent = "We offer the best food in the town!";
    const chinesePic = new Image();
    chinesePic.src = Icon;
    contentDiv.appendChild(heading);
    contentDiv.appendChild(paragraph);
    contentDiv.appendChild(chinesePic);
}

export default loadPage;