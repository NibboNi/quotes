import { useState, useEffect } from "react";

import Header from "./components/Header";
import Quoteblock from "./components/Quoteblock";
import Footer from "./components/Footer";

import type { Quote } from "./types";

function App() {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:8000/");
      const data = await response.json();

      setQuotes(data);
    }

    getData();
  }, []);

  return (
    <>
      <Header />
      <main className="custom-scrollbar h-full overflow-y-scroll">
        {quotes.map((block) => (
          <Quoteblock
            key={block.id}
            content={block.content}
            author={block.author}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}

export default App;
