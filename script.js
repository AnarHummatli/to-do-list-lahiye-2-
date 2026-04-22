let sort = document.querySelector(".sort");
let clean = document.querySelector(".search img");
let input = document.querySelector(".search input");
let plusButton = document.querySelector("#plusButton");
let addButton = document.querySelector("#addButton");
let box = document.querySelector(".box");
let listBar = document.querySelector(".listBar");


let list = document.createElement("ol");
let edit = document.createElement("img");
edit.src = "Image/edit.svg";
edit.alt = "Edit Image";

let sortCorrector = true;

sort.addEventListener("mouseenter", function () {
    if (sortCorrector) {
        sort.src = "Image/sort_down(black).svg"
    }
});
sort.addEventListener("mouseleave", function () {
    if (sortCorrector) {
        sort.src = "Image/sort_down.svg"
    }
});

sort.addEventListener("click", function () {
    if (sortCorrector) {
        sort.src = "Image/sort_up.svg"
        sortCorrector = false;
    } else {
        sort.src = "Image/sort_down.svg"
        sortCorrector = true;
    }
});

sort.addEventListener("mouseenter", function () {
    if (!sortCorrector) {
        sort.src = "Image/sort_up(black).svg"
    }
});

sort.addEventListener("mouseleave", function () {
    if (!sortCorrector) {
        sort.src = "Image/sort_up.svg"
    }
});

clean.addEventListener("click", function () {
    input.value = "";
});

clean.addEventListener("mouseenter", function () {
    clean.src = "Image/exit(purple).svg"
});

clean.addEventListener("mouseleave", function () {
    clean.src = "Image/exit.svg"
});

