import type { Quote } from "../types";

type QuoteblockProps = Pick<Quote, "content" | "author">;

function Quoteblock({ content, author }: QuoteblockProps) {
  return (
    <section className="h-full mx-auto w-11/12 max-w-6xl flex flex-col justify-center items-center gap-5">
      <h2 className="text-4xl font-thin text-center md:text-5xl lg:text-6xl xl:text-7xl">
        {content}
      </h2>
      <p className="text-xl font-light md:ml-auto md:text-lg">- {author}</p>
    </section>
  );
}

export default Quoteblock;
