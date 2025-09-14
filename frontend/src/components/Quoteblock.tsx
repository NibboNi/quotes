interface QuoteblockProps {
  quote: string;
  quoted: string;
}

function Quoteblock({ quote, quoted }: QuoteblockProps) {
  return (
    <section className="h-full mx-auto w-11/12 max-w-6xl flex flex-col justify-center items-center gap-5">
      <h2 className="text-4xl font-thin text-center md:text-5xl lg:text-6xl xl:text-7xl">
        {quote}
      </h2>
      <p className="text-xl font-light md:ml-auto md:text-lg">- {quoted}</p>
    </section>
  );
}

export default Quoteblock;
