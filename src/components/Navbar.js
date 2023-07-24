const Navbar = () => {
  return (
    <header class="bg-primary/80 fixed z-50 w-full h-14 my-auto ">
      <div class="flex h-full items-center w-5/6 mx-auto text-white">
        <h1 className="basis-1/2 text-2xl">GENDINGAN</h1>
        <nav class="hidden gap-9 lg:flex h-full items-center p-4 text-lg w-full basis-1/2 justify-end">
          <p className="hover:border-b-2 hover:text-accent border-accent duration-100 cursor-pointer">
            About
          </p>
          <p>Layanan</p>
          <p>Galeri</p>
          <p>Maps</p>
          <p>Rating</p>
          <p>FAQ</p>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
