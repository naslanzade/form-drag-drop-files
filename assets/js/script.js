
let icon = document.querySelector(".item i");
let tableBody = document.querySelector("table tbody");
let dragArea = document.querySelector(".item");
let input = document.querySelector(".item input");

icon.addEventListener("click", function () {
    input.click();
    dragArea.click();
})

checkTable();
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


dragArea.addEventListener("dragover", function (e) {
    e.preventDefault();
  });
  
  dragArea.addEventListener("drop", function (e) {
    e.preventDefault();
  
    for (const file of e.dataTransfer.files) {
      let reader = new FileReader();
  
      reader.onload = function (event) {
        tableBody.innerHTML += `<tr>
              <td><img src="${event.currentTarget.result}" alt=""></td>
              <td>${file.name}</td>
              <td>${file.size}</td>
              <td><i class="remove fa-solid fa-trash-ca"></i></td>
              </tr>`;
  
        let deleteImg = document.querySelectorAll(".remove");
  
        deleteImg.forEach((icon) => {
          icon.addEventListener("click", function () {
            icon.parentNode.parentNode.remove();
          });
        });
      };
  
      reader.readAsDataURL(file);
    }
  });





function checkTable() {
    if (tableBody.innerHTML.trim() == "") {
        tableBody.parentNode.classList.add("d-none")
    } else {
        tableBody.parentNode.classList.remove("d-none")
    }
}