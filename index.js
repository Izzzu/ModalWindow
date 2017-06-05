console.log("Js file");
var modal = document.getElementById('modal');

var btn = document.getElementById('btn');

var closeSpan = document.getElementsByClassName("close")[0];

btn.onclick = () => {
    console.log("btn onclick");
    modal.style.display = "block";

}

closeSpan.onclick = () => {
    modal.style.display = "none";
    console.log("closeSpan onclick");

}

window.onclick = (e) => {
    if(e.target == modal) {
        modal.style.display = "none";
        console.log("window onclick");

    }
}