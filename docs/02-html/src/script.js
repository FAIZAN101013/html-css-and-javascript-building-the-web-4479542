function dragElemnts(terraiumElement) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  terraiumElement.onpointerdown = pointerDrag;

  function pointerDrag(e) {
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;

    document.onpointermove = elmentDrag;
    document.onpointerup = stopElemntDrag;
  }

  function elmentDrag(e) {
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;

    pos3 = e.clientX;
    pos4 = e.clientY;

    terraiumElement.style.top =
      (terraiumElement.offsetTop - pos2) + "px";
    terraiumElement.style.left =
      (terraiumElement.offsetLeft - pos1) + "px";
  }

  function stopElemntDrag() {
    document.onpointermove = null;
    document.onpointerup = null;
  }
}

dragElemnts(document.getElementById("plant1"));
dragElemnts(document.getElementById("plant2"));
dragElemnts(document.getElementById("plant3"));
dragElemnts(document.getElementById("plant4"));
dragElemnts(document.getElementById("plant5"));
dragElemnts(document.getElementById("plant6"));
dragElemnts(document.getElementById("plant7"));
dragElemnts(document.getElementById("plant8"));
dragElemnts(document.getElementById("plant9"));
dragElemnts(document.getElementById("plant10"));
dragElemnts(document.getElementById("plant11"));
dragElemnts(document.getElementById("plant12"));
dragElemnts(document.getElementById("plant13"));
dragElemnts(document.getElementById("plant14"));
