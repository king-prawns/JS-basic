document.addEventListener("first-element-click", e => {
  const el = document.querySelector("second-element");
  el.increment();
});
