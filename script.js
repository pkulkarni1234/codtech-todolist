const addUserbtn = document.getElementById('addUser');
const usernameText = document.getElementById('username');
const recordDisplay = document.getElementById('records');
let userArray = [];
let objStr = localStorage.getItem('users');

if (objStr != null) {
    userArray = JSON.parse(objStr);
}

DisplayInfo();

addUserbtn.onclick = () => {
    const name = usernameText.value;
    userArray.push({ 'name': name });
    SaveInfo(userArray);
    usernameText.value = '';
    DisplayInfo();
};

function SaveInfo(userArray) {
    let str = JSON.stringify(userArray);
    localStorage.setItem('users', str);
}

function DisplayInfo() {
    let statement = '';
    userArray.forEach((user, i) => {
        statement += `<tr>
           <th scope="row">${i + 1}</th>
           <td>${user.name}</td>
           <td>
               <i class="btn text-white fa fa-edit btn-info mx-3" onclick="EditInfo(${i})"></i>
               <i class="btn btn-danger text-white fa fa-trash" onclick="DeleteInfo(${i})"></i>
           </td>
       </tr>`;
    });
    // Assuming recordDisplay is an object with a statement property
    recordDisplay.innerHTML = statement;
}

function EditInfo(index) {
    // Implement edit functionality using the userArray and index
    const newName = prompt('Enter new name:');
    if (newName !== null) {
        userArray[index].name = newName;
        SaveInfo(userArray);
        DisplayInfo();
    }
}

function DeleteInfo(index) {
    // Implement delete functionality using the userArray and index
    const confirmDelete = confirm('Are you sure you want to delete this user?');
    if (confirmDelete) {
        userArray.splice(index, 1);
        SaveInfo(userArray);
        DisplayInfo();
    }
}
