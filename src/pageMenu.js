function pageMenu() {
    const liArr = ["Fried Rice", "Marshmellow", "Chicken Nugget"];
    
    const myContent = document.querySelector("#content");

    while (myContent.hasChildNodes()) {
        myContent.removeChild(myContent.firstChild);
    }

    const first = document.createElement("h1");
    first.textContent = "Available Menu";

    const second = document.createElement("div")
    second.classList.add("contentText");
    

    const SecondChild = document.createElement("ul")
    
    liArr.forEach((x) => {
        const li = document.createElement("li");

        li.textContent = x;

        SecondChild.appendChild(li);
    })

    const ulChild = SecondChild.children;
    Array.from(ulChild).forEach((x) => {
        x.setAttribute("style", "border: 1px solid black; width: 30%; height: 40%; border-radius: 20px; padding: 20px; margin-top: 10px;")
    })

    second.appendChild(SecondChild);

    myContent.appendChild(first);
    myContent.appendChild(second);


}
export default pageMenu;