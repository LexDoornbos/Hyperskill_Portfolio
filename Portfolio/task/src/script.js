function toggleVisibility1() {
    let div = document.getElementById("flashcardsInfo");
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}
function toggleVisibility2() {
    let div = document.getElementById("virtPianoInfo");
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}

const hamburgerIco = document.getElementById("hamburgerIco");

hamburgerIco.addEventListener("click",  function() {
    const hamburgerList = document.getElementById("hamburgerList")
    console.log(hamburgerList);
    if (hamburgerList.style.visibility === "visible"){
        hamburgerList.style.visibility = "hidden";
    } else{
        hamburgerList.style.visibility = "visible";
    }
})