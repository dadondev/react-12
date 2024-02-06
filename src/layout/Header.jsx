import DarkMode from "../components/DarkMode";

function Header() {
  return (
    <header className="py-4 px-3 lg:px-3 bg-white shadow-lg shadow-[rgba(0,0,0,0.0562)] dark:bg-primary mb-7">
      <div className="container mx-auto flex items-center justify-between">
        <a
          href=""
          className="text-[14px] sm:text-2xl dark:text-white font-extrabold"
        >
          Where in the world?
        </a>
        <DarkMode />
      </div>
    </header>
  );
}

export default Header;
