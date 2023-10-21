const Book = require("../model/Book");

const getBooks = async (req, res) => {
  const books = await Book.find();

  res.render("index", { books });
};

const addBook = async (req, res) => {
  let edition;
  const { title, version, year, author } = req.body;
  if (version) edition = version; //to check if edition field is empty

  const book = new Book({ title, edition, year, author });
  try {
    await book.save();
    res.redirect("/");
  } catch (error) {
    console.error(error);
  }
};

const removeBook = async (req, res) => {
  const { id } = req.params;
  try {
    await Book.findByIdAndDelete(id);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

const editBook = async (req, res) => {
  const { id } = req.params;

  console.log(req.body)

  let edition;
  const { title, version, year, author } = req.body;
  if (version) edition = version;

  try {
    await Book.findByIdAndUpdate(id, { title, edition, year, author });
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addBook,
  removeBook,
  editBook,
  getBooks,
};
