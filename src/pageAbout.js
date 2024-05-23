function pageAbout() {
    const myContent = document.querySelector("#content");

    while (myContent.hasChildNodes()) {
        myContent.removeChild(myContent.firstChild);
    }

    const first = document.createElement("h1");
    first.textContent = "About us";

    const second = document.createElement("div")
    second.classList.add("contentText");
    
    const secondChild1 = document.createElement("blockquote")
    const secondChildChild = document.createElement("p");
    secondChildChild.textContent = "Welcome to our company! We are dedicated to delivering exceptional products and services that enrich the lives of our customers. Our team is passionate about innovation and excellence, striving to set new standards in our industry. With a commitment to quality and a customer-centric approach, we work tirelessly to understand and meet the unique needs of each client. Our mission is to foster lasting relationships built on trust, integrity, and mutual respect. Join us on our journey to make a positive impact in the world through our unwavering dedication to greatness."

    secondChild1.appendChild(secondChildChild);
    second.appendChild(secondChild1);
    myContent.appendChild(first);
    myContent.appendChild(second);
}

export default pageAbout