const colorPicker = document.querySelector("#base");
const blurRange = document.querySelector("#blur");
const spacingRange = document.querySelector("#spacing");
const hl = document.querySelector(".hl");
hl.style.setProperty("color", colorPicker.value);

const image = document.querySelector("img");
image.style.setProperty("border-style", "solid");
image.style.setProperty("border-color", colorPicker.value);
image.style.setProperty("border-width", `${spacingRange.value}px`);
image.style.setProperty("filter", `blur(${blurRange.value}px)`);

colorPicker.addEventListener("input", (e) => {
  image.style.setProperty("border-color", e.target.value);
  hl.style.setProperty("color", e.target.value);
});

blurRange.addEventListener("input", (e) => {
  image.style.setProperty("filter", `blur(${e.target.value}px)`);
});

blurRange.addEventListener("scroll", (e) => {
  e.preventDefault();
  image.style.setProperty("filter", `blur(${e.target.value}px)`);
});

spacingRange.addEventListener("input", (e) => {
  image.style.setProperty("border-width", `${e.target.value}px`);
});

spacingRange.addEventListener("scroll", (e) => {
  image.style.setProperty("border-width", `${e.target.value}px`);
});
