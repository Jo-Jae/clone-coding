import Logo from "/public/images/logo-m_orange.svg";

const Header = () => {
  return (
    <header className="sticky top-0 border bg-white">
      <div className="flex justify-between py-3 px-10">
        <img className="w-[129px]" src={Logo} alt="zigbang-Logo" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="45"
          className="p-2 inline-block lg:hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </div>
    </header>
  );
};

export default Header;
