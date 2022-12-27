//contact me button
element = document.getElementById("contact-btn")
element.addEventListener("mouseover", function(e) {
    let elem = document.getElementById("contact-icon");
    elem.className="contact-icon";
});

element.addEventListener("mouseleave", function(e) {
    let elem = document.getElementById("contact-icon");
    elem.className="";
});

//visite buttons
let elems = document.getElementsByClassName("visite-link");
for(let i=0; i<elems.length; i++) {
    elems[i].addEventListener("mouseover", function(e) {
        document.getElementById("v-"+i).style.height="160px";
    });

    elems[i].addEventListener("mouseleave", function(e) {
        document.getElementById("v-"+i).style.height="40px";
    });
}