// let dragElems = document.querySelectorAll(".drag-elem");
// let dropElem = document.querySelector(".drop-elem");



// for (const elem of dragElems) {
//     elem.ondragstart = (e) => {
//         e.dataTransfer.setData("id", e.target.getAttribute("id"));
//     }
// }

// dropElem.ondragover = (e) => {
//     e.preventDefault();
// }

// dropElem.ondrop = (e) => {
//     let id = e.dataTransfer.getData("id");
//     let elem = document.getElementById(id);

//     dropElem.append(elem)
//     // if (dropElem.firstElementChild.nextElementSibling.nextElementSibling.childElementCount < 2
//     // ) {
//     //     dropElem.firstElementChild.nextElementSibling.nextElementSibling.childElementCount.appendChild(elem);
//     // }

//     // if (dropElem.firstElementChild.nextElementSibling.nextElementSibling.childElementCount < 1
//     // ) {
//     //     dropElem.firstElementChild.nextElementSibling.childElementCount.appendChild(elem);
//     // }
//     // if (dropElem.firstElementChild.childElementCount < 2
//     //     ) {
//     //         dropElem.firstElementChild.childElementCount.appendChild(elem);
//     //     }


let icon = document.querySelector("i");

let tableBody = document.querySelector(".table tbody")




let input = document.querySelector("input");
input.addEventListener("change", function (e) {
    for (const file of e.target.files) {

        let reader = new FileReader();

        reader.onloadend = (event) => {
            let base64 = event.currentTarget.result;

            tableBody.innerHTML += `<tr>
                <th><img src="${base64}" alt=""></th>
                <td>${file.name}</td>
                <td>${file.size}</td>
                <td><i class="remove fa-solid fa-trash-can"></i></td>              
              </tr>`

              checkTable();

            let deleteImg = document.querySelectorAll(".remove");

            deleteImg.forEach(icon => {
                icon.addEventListener("click", function () {
                    icon.parentNode.parentNode.remove();
                    checkTable();
                })
            });
        }
        reader.readAsDataURL(file)
    }
})


icon.addEventListener("click", function () {
    input.click();
})

checkTable();


function checkTable(){
    if (tableBody.innerHTML.trim() == "") {
        tableBody.parentNode.classList.add("d-none")
    }else{
        tableBody.parentNode.classList.remove("d-none")
    }
}