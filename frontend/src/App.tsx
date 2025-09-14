import { useState } from "react";

import Header from "./components/Header";
import Quoteblock from "./components/Quoteblock";
import Footer from "./components/Footer";

function App() {
  const [quotes] = useState([
    {
      id: 1,
      quote:
        "El mayor espectáculo es un hombre esforzado luchando contra la adversidad; pero hay otro aún más grande: ver a otro hombre lanzarse en su ayuda.",
      quoted: "Oliver Goldsmith",
    },
    {
      id: 2,
      quote:
        "El mayor espectáculo es un hombre esforzado luchando contra la adversidad; pero hay otro aún más grande: ver a otro hombre lanzarse en su ayuda.",
      quoted: "Oliver Goldsmith",
    },
    {
      id: 3,
      quote:
        "El mayor espectáculo es un hombre esforzado luchando contra la adversidad; pero hay otro aún más grande: ver a otro hombre lanzarse en su ayuda.",
      quoted: "Oliver Goldsmith",
    },
  ]);

  return (
    <>
      <Header />
      <main className="custom-scrollbar h-full overflow-y-scroll">
        {quotes.map((block) => (
          <Quoteblock
            key={block.id}
            quote={block.quote}
            quoted={block.quoted}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}

export default App;
