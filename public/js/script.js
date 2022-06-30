console.log("coucou");

document.querySelectorAll(".card-img").forEach((img) => {
  img.addEventListener("mouseover", (event) => {
    const eventSrc = event.target.src;
    // eventSrc sous la forme http://localhost:5000/images/collierpontos.jpg
    // je garde uniquement le nom
    const newSrc = eventSrc.substr(0, eventSrc.length - 4).substr(29);
    event.target.setAttribute("src", `./images/${newSrc}2.jpg`);
  });
  img.addEventListener("mouseout", (event) => {
    const eventSrc = event.target.src;
    // eventSrc sous la forme http://localhost:5000/images/collierpontos2.jpg
    // je garde uniquement le nom
    const newSrc = eventSrc.substr(0, eventSrc.length - 5).substr(29);
    event.target.setAttribute("src", `./images/${newSrc}.jpg`);
  });
});
