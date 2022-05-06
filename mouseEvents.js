AFRAME.registerComponent("listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
    },
    HandleComics: function () {
      const id = this.el.getAttribute("id");
      const comicsList = ["fantasticFour", "hulk", "spiderman"];
      if (comicsList.includes(id)) {
        const comicContainer = document.querySelector("#posters-container");
        comicContainer.setAttribute("listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", {
          color: "#39FF14",
          opacity: 1,
        });
      }
    },
  
  handleMouseEnterEvents: function(){
    this.el.addEventListener("mouseenter",() =>{
      this.HandleComics();
    });
  },
  handleMouseLeaveEvents: function(){
    this.el.addEventListener("mouseleave",() => {
      const {selectedItemId} = this.data;
      if(selectedItemId){
        const el = document.querySelector(`#${selectedItemId}`);
        const id = el.getAttribute("id");
        if(id==selectedItemId){
          el.setAttribute("material",{
            color: "#ffff99",
            opacity: 1,
          });
        }
      }
    })
  }
  
  });
  