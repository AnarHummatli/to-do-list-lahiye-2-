let sort = document.querySelector(".sort");
let clean = document.querySelector(".search img");
let input = document.querySelector(".search input");
let plusButton = document.querySelector("#plusButton");
let addButton = document.querySelector("#addButton");
let box = document.querySelector(".box");
let listBar = document.querySelector(".listBar");


let list = document.createElement("ol");
let edit = document.createElement("img");
edit.src = "Image/edit.png";
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


addButton.addEventListener("click", function () {

    box.style.cssText = `
    width: 24.83vw;
    min-height: 5.71vh;
    padding-left: 1.25vw;
    border: 1px solid #C4C4C4;
    border-radius: 0.9vw;
    margin-left: 2.43vw; 
    margin-top: -1.43vh;
    margin-bottom: 3.3vh;
    `;

    listBar.style.cssText = `
    width: 19.88vw;
    min-height: 2.86vh;
    margin-top: 1.85vh;
    `;

    let listItem = document.createElement("li");
    listItem.textContent = input.value;

    let editClone = edit.cloneNode(true);
    let cleanClone = clean.cloneNode(true);

    listBar.appendChild(list);
    list.appendChild(listItem);
    listItem.appendChild(editClone);
    listItem.appendChild(cleanClone);

    listItem.style.cssText = `
    width: 100%;
    height: 2.86vh;
    font-size: 1.39vw;
    margin-top: 3vh;
    margin-bottom: 5vh;
    margin-left: 2.9vw;
    `;

    cleanClone.style.cssText = `
    display: block;
    width: 1.74vw;
    height: 2.86vh;
    margin-left: auto;
    margin-right: 1.77vw;
    margin-top: -2.65vh;
    `;

    editClone.style.cssText = `
    display: block;
    width: 1.7vw;
    height: 2.5vh;
    margin-left: auto;
    margin-right: 5.6vw;
    margin-top: -2.5vh;
    `;

    input.value = "";

    // // input.style.display = "none";

    cleanClone.addEventListener("mouseenter", function () {
        cleanClone.src = "Image/exit(purple).svg"
    });

    // cleanClone.addEventListener("click", function () {
    //     
    // });

    cleanClone.addEventListener("mouseleave", function () {
        cleanClone.src = "Image/exit.svg"
    });

    editClone.addEventListener("mouseenter", function () {
        editClone.src = "Image/edit(purple).png"
    });

    // editClone.addEventListener("click", function () {

    // });

    editClone.addEventListener("mouseleave", function () {
        editClone.src = "Image/edit.png"
    });

});