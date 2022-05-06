AFRAME.registerComponent("posters", {
  init: function () {
    this.postersContainer = this.el;
    this.posters();
  },

  posters: function () {
    const postersRef = [
      {
        id: "fantasticFour",
        url: "./assets/fan-four.jpg"
      },
      {
        id: "hulk",
        url: "./assets/hulk.jpg"
      },
      {
        id: "spiderman",
        url: "./assets/spiderman.jpg"
      }

    ];
    let prevoiusXPosition = -60;

    for (var item of postersRef) {
      const posX = prevoiusXPosition + 30;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      const borderEl = this.border(position, item.id);

      const poster = this.comicThumbnail(item);
      borderEl.appendChild(poster);

      this.postersContainer.appendChild(borderEl);
    }
  },
  border: function (position, id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 20,
      height: 40
    });

    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", { color: "#ffff99" });
    entityEl.setAttribute("listener", {});

    return entityEl;
  },
  comicThumbnail: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 20,
      height: 28
    });

    entityEl.setAttribute("position", { x: 0, y: 5, z: 0.1 });
    entityEl.setAttribute("material", { src: item.url });

    return entityEl;
  }
});