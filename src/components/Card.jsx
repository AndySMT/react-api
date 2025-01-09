function Card({ title, author, status, imgUrl }) {
  const statusLabel = status ? "✔️ Pubblicato" : "❌ Non pubblicato";

  return (
    <div className="rounded-lg bg-zinc-950 p-4" key={Card.id}>
      <img
        src={imgUrl}
        alt={title}
        className="h-48 w-full object-cover rounded-t-lg"
      />
      <div className="flex flex-col p-4">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <p className="text-zinc-400">Autore: {author}</p>
        <span>{statusLabel}</span>
      </div>
    </div>
  );
}

// Imposta dei valori di default per le props
Card.defaultProps = {
  title: "Titolo predefinito",
  author: "Autore sconosciuto",
  status: false,
  imgUrl: "https://via.placeholder.com/150", // Immagine predefinita
};

export default Card;
