import './styles.css';
import loadPage from './pageload.js';
import pageMenu from './pageMenu.js';
import pageAbout from './pageAbout.js';
import pageContact from './pageContact.js';

const myContent = document.querySelector("#content");
const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");
const contactBtn = document.querySelector("#contact");

homeBtn.addEventListener("click", loadPage);
menuBtn.addEventListener("click", pageMenu);
aboutBtn.addEventListener("click", pageAbout);
contactBtn.addEventListener("click", pageContact);





loadPage();

console.log("Haloooo")