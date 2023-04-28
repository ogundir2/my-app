import { useState } from "react";
import { supabase } from "./supabaseClient";
import logo from "./logo.svg";
import "./App.css";

function Library() {
  const [myBooks, setMyBooks] = useState([]);

  async function getBooks() {
    let { data: books, error } = await supabase
      .from("books")
      .select("*");
    setMyBooks(books);
  }

  getBooks();

  return (
    <table>
    {
      myBooks.map(b => (
        <tr>
          <td>{b.title}</td>
          <td>{b.author}</td>
          <td>{b.isbn}</td>
        </tr>
      ))
    }
    </table>
  );
}

const magazines = [
  {
    id: 1,
    title: "Architectural Digest",
    theme: "architecture",
    isAvailable: true,
  },
  { id: 1, title: "Dwell", theme: "architecture", isAvailable: true },
  {
    id: 1,
    title: "Communication Arts",
    theme: "architecture",
    isAvailable: false,
  },
];

function ZineRack() {
  const listZines = magazines.map((zine) => (
    <li key={zine.id} style={{ color: zine.isAvailable ? "green" : "red" }}>
      {zine.title}
    </li>
  ));

  return <ul>{listZines}</ul>;
}

const book = {
  title: "The Time Machine",
  author: "H.G. Wells",
  published: "1895",
  image:
    "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51oTPQv1D+L.jpg",
  width: 200,
  height: 264,
};

function Bookshelf() {
  return (
    <>
      <h2>
        {book.title} ({book.published})
      </h2>
      <p>{book.author}</p>
      <img
        className="bookCover"
        src={book.image}
        alt={book.title + "cover"}
        style={{
          width: book.width,
          height: book.height,
        }}
      />
    </>
  );
}

function MagicButton() {
  const [count, setCount] = useState(0);
  
  function doMagic() {
    setCount(count + 1);
  }

  return (
    <>
      <h3>This is a magic button</h3>
      <button onClick={doMagic}>Magic {count}</button>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Library />
        <ZineRack />
        <Bookshelf />
        <MagicButton />
      </header>
    </div>
  );
}

export default App;
