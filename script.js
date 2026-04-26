let sort = document.querySelector(".sort");
let search = document.querySelector(".search");
let clean = document.querySelector(".search img");
let input = document.querySelector(".search input");
let plusButton = document.querySelector("#plusButton");
let addButton = document.querySelector("#addButton");
let box = document.querySelector(".box");
let listBar = document.querySelector(".listBar");
let space = document.querySelector("#space");


let list = document.createElement("ol");
let edit = document.createElement("img");
edit.src = "Image/edit.png";
edit.alt = "Edit Image";





function updateListStyles() {

    let items = list.querySelectorAll("li");

    items.forEach(function (item, index) {
        if (items.length === 1) {
            item.style.cssText = `
            width: 100%;
            height: 2.86vh;
            font-size: 1.15vw;
            margin-top: -0.33vh;
            margin-left: 2.65vw;
            `;

        }

        else if (index === items.length - 1) {
            item.style.cssText = `
            width: 100%;
            height: 2.86vh;
            font-size: 1.15vw;
            margin-top: -0.7vh;
            margin-bottom: 0.7vh;
            margin-left: 2.65vw;
            `;
        }

        else {
            item.style.cssText = `
            width: 100%;
            height: 2.86vh;
            font-size: 1.15vw;
            margin-top: -0.7vh;
            margin-bottom: 2.9vh;
            margin-left: 2.65vw;
            `;
        }

    });

}





let sortCorrector = true;

sort.addEventListener("mouseenter", function () {
    if (sortCorrector) {
        sort.src = "Image/sort_down(black).svg"
    } else {
        sort.src = "Image/sort_up(black).svg"
    }
});
sort.addEventListener("mouseleave", function () {
    if (sortCorrector) {
        sort.src = "Image/sort_down.svg"
    } else {
        sort.src = "Image/sort_up.svg"
    }
});

sort.addEventListener("click", function () {
    if (sortCorrector) {
        sortCorrector = false;
        sort.src = "Image/sort_up(black).svg";
    } else {
        sortCorrector = true;
        sort.src = "Image/sort_down(black).svg";
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

    if (input.value.trim() === "") {
        input.style.border = "2px solid red";
        return;
    } else {
        input.style.border = "1px solid #C4C4C4";
    }

    box.style.cssText = `
    width: 24.83vw;
    min-height: 5.71vh;
    padding-left: 1.25vw;
    border: 1px solid #C4C4C4;
    border-radius: 0.9vw;
    margin-left: 2.43vw; 
    margin-top: -1.43vh;
    margin-bottom: 2.65vh;
    `;

    listBar.style.cssText = `
    width: 19.88vw;
    min-height: 2.86vh;
    margin-top: 1.85vh;
    `;

    let listItem = document.createElement("li");
    listItem.textContent = input.value;
    listItem.style.display = "flex";
    listItem.style.alignItems = "center";
    listItem.style.justifyContent = "flex-start";

    let editClone = edit.cloneNode(true);
    let cleanClone = clean.cloneNode(true);

    listBar.appendChild(list);
    list.appendChild(listItem);
    listItem.appendChild(editClone);
    listItem.appendChild(cleanClone);

    updateListStyles();


    cleanClone.style.cssText = `
    display: block;
    width: 1.74vw;
    height: 2.86vh;
    margin-left: auto;
    margin-right: 2vw;
    margin-top: -2.68vh;
    `;

    editClone.style.cssText = `
    display: block;
    width: 1.7vw;
    height: 2.7vh;
    margin-left: auto;
    margin-right: 5.8vw;
    margin-top: -2.55vh;
    `;

    input.value = "";
    space.style.display = "none";
    search.style.display = "none";

    cleanClone.addEventListener("mouseenter", function () {
        cleanClone.src = "Image/exit(purple).svg"
    });

    cleanClone.addEventListener("click", function () {
        listItem.remove();
        updateListStyles();
        if (list.children.length == 0) {
            box.style.display = "none";
            search.style.display = "flex";
            clean.style.cssText = `
            margin-left: -4.75vw;
            `;
        }
    });

    cleanClone.addEventListener("mouseleave", function () {
        cleanClone.src = "Image/exit.svg"
    });


    let isEditing = false;

    editClone.addEventListener("mouseenter", function () {
        if (!isEditing) {
            editClone.src = "Image/edit(purple).png";
        } else {
            editClone.src = "Image/add(purple).png";
        }
    });

    editClone.addEventListener("click", function () {
        if (!isEditing) {
            isEditing = true;

            let currentText = listItem.childNodes[0].textContent.trim();
            listItem.childNodes[0].textContent = "";

            let inputClone = document.createElement("input");
            inputClone.type = "text";
            inputClone.value = currentText;

            inputClone.style.cssText = `
            width: 11.7vw;
            height: 3.5vh; 
            border: 0.11vw solid black;
            border-radius: 0.55vw;
            outline: none;
            font-size: 1.15vw;
            padding-left: 0.8vw;
            margin-top: -1vw;
        `;

            listItem.prepend(inputClone);
            inputClone.focus();

            editClone.src = "Image/add.png";
            editClone.style.cssText = `
            display: block;
            height: 2.9vh;
            margin-left: auto;
            margin-right: 5.8vw;
            margin-top: -3.28vh;
            `;

            cleanClone.style.cssText = `
            display: block;
            width: 1.74vw;
            height: 2.86vh;
            margin-left: auto;
            margin-right: 2vw;
            margin-top: -2.9vh;
            `;

        } else {
            let inputField = listItem.querySelector("input");
            let newValue = inputField.value.trim();

            if (newValue === "") {
                inputField.style.border = "0.11vw solid red";
                return;
            }

            inputField.remove();
            listItem.childNodes[0].textContent = newValue;

            isEditing = false;
            editClone.src = "Image/edit(purple).png";

            cleanClone.style.cssText = `
            display: block;
            width: 1.74vw;
            height: 2.86vh;
            margin-left: auto;
            margin-right: 2vw;
            margin-top: -2.68vh;
            `;

            editClone.style.cssText = `
            display: block;
            width: 1.7vw;
            height: 2.7vh;
            margin-left: auto;
            margin-right: 5.8vw;
            margin-top: -2.55vh;
            `;

            isEditing = false;
        }
    });

    editClone.addEventListener("mouseleave", function () {
        if (!isEditing) {
            editClone.src = "Image/edit.png";
        } else {
            editClone.src = "Image/add.png";
        }
    });

});





plusButton.addEventListener("click", function () {

    if (space) {
        space.style.display = "none";
    }

    search.style.cssText = `
        display: flex;
        margin-bottom: 2.65vh;
        margin-top: 0;
        order: -1;
    `;

    if (box.style.display !== "none") {
        box.parentElement.insertBefore(search, box);
    }

    clean.style.cssText = `
        margin-left: -4.75vw;
    `;
    
    input.focus();
});





sort.addEventListener("click", function () {
    let items = Array.from(list.querySelectorAll("li"));

    items.sort(function (a, b) {
        let textA = a.childNodes[0].textContent.trim().toLowerCase();
        let textB = b.childNodes[0].textContent.trim().toLowerCase();

        if (sortCorrector) {
            return textA.localeCompare(textB);
        } else {
            return textB.localeCompare(textA);
        }
    });

    list.innerHTML = "";
    items.forEach(function (item) {
        list.appendChild(item);
    });

    updateListStyles();
});


