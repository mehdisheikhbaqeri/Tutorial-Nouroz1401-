const icon = document.getElementById("icon");

icon.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    icon.src = "./icon/sun.png";
  } else {
    icon.src = "./icon/moon.png";
  }
});
