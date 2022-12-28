
let screensize = 1399.98;
let previousScrollY = 0;

//Scroll bar
window.addEventListener("scroll", function(event) {
    let header = document.getElementById("header");
    if(this.scrollY > previousScrollY && this.scrollY > 150) {
        header.className = "content-header hide";
    }
    else if(this.scrollY < previousScrollY && this.scrollY > 150) {
        header.className = "content-header shadow";
    }
    else if(this.scrollY > previousScrollY) {
        header.className = "content-header shadow";
    }
    else {
        header.className = "content-header";
    }
    previousScrollY = this.scrollY
});

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