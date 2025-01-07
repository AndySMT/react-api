import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";
import Card from "./components/Card";

const initialData = {
  title: "",
  author: "",
  status: false,
};

function App() {
  const [formData, stateFormData] = useState({ initialData });
  const [cards, setCards] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCards([...cards, formData]);
    stateFormData(initialData);
  };

  const handleTitleChange = (e) => {
    stateFormData({ ...formData, title: e.target.value });
  };
  const handleAuthorChange = (e) => {
    stateFormData({ ...formData, author: e.target.value });
  };
  const handleStatusChange = (e) => {
    stateFormData({ ...formData, status: e.target.checked });
  };

  const handleRemoveClick = (e) => {
    const cardId = e.target.closest("li").id;
    const nuoveCards = cards.filter((card, index) => index !== cardId);
    setCards(nuoveCards);
  };
  useEffect(() => {
    axios.get("http://127.0.0.1:3000/posts").then((res) => {
      console.log(res.data);
      setPosts(res.data);
    });
  }, []);
  const [posts, setPosts] = useState([]); // Stato per memorizzare i post
  return (
    <>
      {/* <Header/> */}
      <header>
        <h1>Titolo</h1>
      </header>
      {/* <Main/> */}
      {/*   <Form/> */}
      <section>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleTitleChange}
            value={formData.title}
            placeholder="Titolo"
          />
          <input
            type="text"
            onChange={handleAuthorChange}
            value={formData.author}
            placeholder="Autore"
          />
          <input
            type="checkbox"
            name="status"
            onChange={handleStatusChange}
            checked={formData.status}
          />
          <label htmlFor="status">Published ?</label>
          <button type="submit">Invia</button>
        </form>
      </section>
      {/* <Cardwrapper/> */}
      <section>
        <ul>
          {cards.map((card, index) => (
            <li key={index}>
              <div>Titolo: {card.title}</div>
              <div>Autore: {card.author}</div>
              <div>Stato: {card.status ? "Pubblicato" : "Non pubblicato"}</div>
              <span onClick={handleRemoveClick}>X</span>
            </li>
          ))}
        </ul>
      </section>
      {/* <section>
        <div className="container mx-auto p-4">
          <h1 className="text-4xl font-bold mb-4">Lista dei Post</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post) => (
              <Card
                key={post.id}
                title={post.title}
                author={post.author}
                status={post.status}
                imgUrl="https://via.placeholder.com/150" // Puoi personalizzarlo se hai immagini nei tuoi post
              />
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}

export default App;
