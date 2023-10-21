const url = `http://localhost:5000`;
const bookTitle = document.querySelector("#title");
const bookEdition = document.querySelector("#edition");
const bookDate = document.querySelector("#date");
const bookAuthor = document.querySelector("#author");
const form = document.querySelector("form");
const formBtnContainer = document.querySelector(".form_btn_container");
const editBtn = document.querySelector("#edit_btn");
const submitBtn = document.querySelector("#submit_btn");

async function handleDelete(id) {
  try {
    await fetch(`${url}/remove/${id}`, {
      method: "DELETE",
    });
    console.log("Book Deleted");
    location.reload();
  } catch (error) {
    console.log(error);
  }
}

let ID;
async function handleEdit(id, title, edition, year, author) {
  bookTitle.value = title;
  bookEdition.value = edition;
  bookDate.value = year;
  bookAuthor.value = author;
  ID = id;
  editButton(true);
}

async function editBook() {
  try {
    const data = await fetch(`${url}/edit/${ID}`, {
      method: "PUT",
    });
    console.log("Book Edited", data);
    location.reload();
  } catch (error) {
    console.log(error);
  } finally {
    form.reset();
    editButton(false);
  }
}

function editButton(action) {
  editBtn.style.display = action ? "block" : "none";
  submitBtn.style.display = action ? "none" : "block";
}
