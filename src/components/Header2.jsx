import Logo from "/images/logo-m_orange.svg";

const Header2 = () => {
  return (
    <header className="sticky top-0 border bg-white z-10 ">
      <div className="flex justify-between py-3  max-w-[1080px] mx-auto">
        <img className="w-[129px]" src={Logo} alt="zigbang-Logo" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="45"
          className="p-2 inline-block "
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

export default Header2;
