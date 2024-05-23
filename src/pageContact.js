function pageContact() {
    const myContent = document.querySelector("#content");

    while (myContent.hasChildNodes()) {
        myContent.removeChild(myContent.firstChild);
    }

    const first = document.createElement("h1");
    first.textContent = "Contact";

    const second = document.createElement("div")
    second.classList.add("contentText");
    
    const secondChild1 = document.createElement("blockquote")
    const secondChildChild = document.createElement("p");
    secondChildChild.textContent = "For any inquiries, feedback, or assistance, please don't hesitate to get in touch with us. You can reach us via email at contact@ourcompany.com or by phone at (123) 456-7890 during our business hours. Our team is here to support you and ensure your experience with us is exceptional"

    secondChild1.appendChild(secondChildChild);
    second.appendChild(secondChild1);
    myContent.appendChild(first);
    myContent.appendChild(second);
}

export default pageContact