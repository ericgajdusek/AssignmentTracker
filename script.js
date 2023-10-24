const table = document.getElementById("main-table");

function addAssignment() {
    // 
    let tr = document.createElement("tr");
    tr.classList.add("data-row");
    // Checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    // Checkbox cell
    let tdCheckbox = document.createElement("td")
    tdCheckbox.classList.add("status-td")
    // Table buttons
    let editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn", "table-btn");
    editBtn.innerHTML = "Edit";
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn", "table-btn");
    deleteBtn.innerHTML = "Delete";
    // Button cell
    let tdBtn = document.createElement("td");
    tdBtn.classList.add("td-btn");
    // Appending elements
    table.appendChild(tr);
    tr.appendChild(tdCheckbox);
    tdCheckbox.appendChild(checkbox);
    for (let i = 0 ; i < 3 ; i++) {
        let td = document.createElement("td");
        td.contentEditable = "true";
        tr.appendChild(td);
    }
    tr.appendChild(tdBtn);
    tdBtn.appendChild(editBtn);
    tdBtn.appendChild(deleteBtn);
}
