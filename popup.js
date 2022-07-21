const anchor = document.querySelector("a");
console.log("anchor", anchor);

anchor.addEventListener("click", () =>  {
  console.log("closing window", window);
  window.close();
})