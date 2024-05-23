function loadPage() {
    const myContent = document.querySelector("#content");

    while (myContent.hasChildNodes()) {
        myContent.removeChild(myContent.firstChild);
    }

    const first = document.createElement("h1");
    first.textContent = "The Best Restaurant in the World";

    const second = document.createElement("div")
    second.classList.add("contentText");
    
    const secondChild1 = document.createElement("blockquote")
    const secondChildChild = document.createElement("p");
    secondChildChild.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras vehicula tincidunt turpis, a semper orci euismod eget. Sed nec feugiat justo. Nullam convallis ligula at dui posuere, ut vestibulum tortor viverra. Integer fermentum justo vitae nulla pharetra, ut volutpat odio pretium. Curabitur tristique odio nec turpis posuere, a consectetur turpis bibendum. Nam vel magna nec lorem pretium interdum. Aliquam erat volutpat. Suspendisse potenti. Donec quis arcu in sapien sollicitudin fermentum et eu eros."

    secondChild1.appendChild(secondChildChild);
    second.appendChild(secondChild1);
    myContent.appendChild(first);
    myContent.appendChild(second);
}

export default loadPage;

