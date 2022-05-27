const inputElements = document.querySelector("#font-size-control");
const textEement = document.querySelector("#text");

const changeSizeEvent = event => {
    
    textEement.style.fontSize = event.currentTarget.value + "px";
};

inputElements.addEventListener("change", changeSizeEvent);