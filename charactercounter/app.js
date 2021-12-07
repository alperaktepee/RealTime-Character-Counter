"use strict";

const textArea = document.getElementById("textarea");
const counterDiv = document.getElementById("sayac");
let boslukSil;

textArea.addEventListener("input", () => {
  counterDiv.innerHTML = textArea.value.length;
});

const bosluklariSil = () => {
  boslukSil = textArea.value;
  boslukSil = boslukSil.replace(/\s+/g, "");
  textArea.value = boslukSil;
  counterDiv.innerHTML = textArea.value.length;
};
