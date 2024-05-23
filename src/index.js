import './styles.css';
import loadPage from './pageload.js';
import pageMenu from './pageMenu.js';

const myContent = document.querySelector("#content");
const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");
const contactBtn = document.querySelector("#contact");

homeBtn.addEventListener("click", loadPage);
menuBtn.addEventListener("click", pageMenu);
aboutBtn.addEventListener("click", loadPage);
contactBtn.addEventListener("click", loadPage);





loadPage();

console.log("Haloooo")