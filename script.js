let sort = document.querySelector(".sort");
let clean = document.querySelector(".search img");

sortCorrector = true;

sort.addEventListener("mouseenter", function() {
    if (sortCorrector) {
        sort.src = "Image/sort_down(black).svg"
    }
});
sort.addEventListener("mouseleave", function() {
    if (sortCorrector) {
        sort.src = "Image/sort_down.svg"
    }
});

sort.addEventListener("click", function() {
    if (sortCorrector) {
        sort.src = "Image/sort_up.svg"
        sortCorrector = false;
    } else {
        sort.src = "Image/sort_down.svg"
        sortCorrector = true;
    }
});

sort.addEventListener("mouseenter", function() {
    if (!sortCorrector) {
        sort.src = "Image/sort_up(black).svg"
    }
});

sort.addEventListener("mouseleave", function() {
    if (!sortCorrector) {
        sort.src = "Image/sort_up.svg"
    }
});

clean.addEventListener("click", function() {
    document.querySelector(".search input").value = "";
});

clean.addEventListener("mouseenter", function() {
    clean.src = "Image/exit(purple).svg"
});

clean.addEventListener("mouseleave", function() {
    clean.src = "Image/exit.svg"
});

