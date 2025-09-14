function Header() {
  return (
    <header className="p-5 flex flex-col justify-center items-center gap-4 md:flex-row md:items-end md:gap-32 lg:gap-64">
      <h1 className="text-4xl font-extralight capitalize">quotes</h1>
      <form>
        <input
          type="text"
          placeholder="search..."
          className="py-0.5 px-4 bg-zinc-900 rounded-full focus:bg-zinc-800 focus:outline-none placeholder:italic placeholder:font-extralight placeholder:text-zinc-300"
        />
      </form>
    </header>
  );
}

export default Header;
