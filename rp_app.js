// *Selectors

const textInput = document.querySelector(".text-input");
const addButton = document.querySelector(".add-li-button");
const userList = document.querySelector(".userUl");
const pickRandomButton = document.querySelector(".pick");

// *Event listeners
// !
document.addEventListener("DOMContentLoaded", getUserLists);
// add "addListItem" on click
addButton.addEventListener("click", addListItem);
// delete 'new-li' on click
userList.addEventListener("click", deleteUserList);
// add randomize function to 'pick a random button'
pickRandomButton.addEventListener("click", randomize);
// !
// *Functions

function addListItem(event) {
  // prevent a page from refresh (after click on an 'addButton' in this case)
  event.preventDefault();
  // create DIV
  const userDiv = document.createElement("div");
  // add a class 'user-li-container' to userDiv
  userDiv.classList.add("licontainer");
  // create LI
  const newList = document.createElement("li");
  // text in textInput will be created with userDiv
  newList.innerText = textInput.value;
  // add a class 'new-user-li' to newList
  newList.classList.add("new-li");
  // connection between child 'newList' and parent 'userDiv'
  userDiv.appendChild(newList);
  // add userlists to localStorage
  saveLocalUserLi(textInput.value);
  // create delete button
  const deleteButton = document.createElement("button");
  // add inner text into button
  deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  // add class to deleteButton
  deleteButton.classList.add("new-li-delete-button");
  // connection between child 'deleteButton' and parent 'userDiv'
  userDiv.appendChild(deleteButton);
  // connection between child 'userDiv' and parent 'userList'
  userList.appendChild(userDiv);
  textInput.value = "";
}

function deleteUserList(e) {
  // constant for target event 'deleteUserList'
  const item = e.target;
  // delete new userList
  if (item.classList[0] === "new-li-delete-button") {
    const licontainer = item.parentElement;
    // animation
    licontainer.classList.add("fall");
    removeLocalLists(licontainer);
    // removes 'licontainer'
    licontainer.addEventListener("transitionend", function () {
      licontainer.remove();
    });
  }
}

function saveLocalUserLi(licontainer) {
  // create variable 'userlists'
  let userlists;
  // check if 'userlists' is empty
  if (localStorage.getItem("userlists") === null) {
    // if 'userlists' is empty create empty array
    userlists = [];
  } else {
    // else parse 'userlists'
    userlists = JSON.parse(localStorage.getItem("userlists"));
  }
  // add 'licontainer' into array 'userlists'
  userlists.push(licontainer);
  // push 'userlists' back to localStorage
  localStorage.setItem("userlists", JSON.stringify(userlists));
}

function getUserLists() {
  // create variable 'userlists'
  let userlists;
  // check if 'userlists' is empty
  if (localStorage.getItem("userlists") === null) {
    // if 'userlists' is empty create empty array
    userlists = [];
  } else {
    // else parse 'userlists'
    userlists = JSON.parse(localStorage.getItem("userlists"));
  }
  userlists.forEach(function (licontainer) {
    // create DIV
    const userDiv = document.createElement("div");
    // add a class 'user-li-container' to userDiv
    userDiv.classList.add("licontainer");
    // create LI
    const newList = document.createElement("li");
    // text in textInput will be created with userDiv
    newList.innerText = licontainer;
    // add a class 'new-user-li' to newList
    newList.classList.add("new-li");
    // connection between child 'newList' and parent 'userDiv'
    userDiv.appendChild(newList);
    // create delete button
    const deleteButton = document.createElement("button");
    // add inner text into button
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    // add class to deleteButton
    deleteButton.classList.add("new-li-delete-button");
    // connection between child 'deleteButton' and parent 'userDiv'
    userDiv.appendChild(deleteButton);
    // connection between child 'userDiv' and parent 'userList'
    userList.appendChild(userDiv);
  });
}

function removeLocalLists(licontainer) {
  // create variable 'userlists'
  let userlists;
  // check if 'userlists' is empty
  if (localStorage.getItem("userlists") === null) {
    // if 'userlists' is empty create empty array
    userlists = [];
  } else {
    // else parse 'userlists'
    userlists = JSON.parse(localStorage.getItem("userlists"));
  }
  const licontainerIndex = licontainer.children[0].innerText;
  userlists.splice(userlists.indexOf(licontainerIndex), 1);
  localStorage.setItem("userlists", JSON.stringify(userlists));
}

function randomize() {
  // create variable 'userlists'
  let userlists;
  let licontainer = userList.children;
  // check if 'userlists' is empty
  if (localStorage.getItem("userlists") === null) {
    // if 'userlists' is empty create empty array
    userlists = [];
  } else {
    // else parse 'userlists'
    userlists = JSON.parse(localStorage.getItem("userlists"));
  }

  const licontainerEmptyArray = [];
  licontainerEmptyArray.push(JSON.stringify(licontainer));
  // let randomized = Math.floor(Math.random() * (licontainerArray.length));
  // let size = licontainerEmptyArray.length;
  console.log(licontainerEmptyArray[1]);
}
