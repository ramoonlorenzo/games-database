window.addEventListener("pageshow", function (event) {
  if (event.persisted) {
    document.documentElement.classList.add("is-transitioning");

    setTimeout(() => {
      document.documentElement.classList.remove("is-transitioning");
    }, 50);
  } else {
    document.documentElement.classList.remove("is-transitioning");
  }
});

document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", function (e) {
    if (this.target === "_blank") return;
    if (this.href.includes("#")) return;

    e.preventDefault();

    document.documentElement.classList.add("is-transitioning");

    setTimeout(() => {
      window.location.href = this.href;
    }, 500);
  });
});
