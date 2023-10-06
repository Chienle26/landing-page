import { useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import useDarkMode from "../../hooks/useDarkMode";

function NavBar(props) {
  // eslint-disable-next-line react/prop-types
  const { isMobile } = props;
  const [openMenu, setOpenMenu] = useState(false);
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  console.log("🚀 ~ file: NavBar.jsx:13 ~ NavBar ~ isDarkMode:", isDarkMode);

  const handleDarkMode = () => {
    toggleDarkMode();
  };

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav className="flex items-center">
      <div className="flex items-center">
        <div className="text-20 font-bold mr-2">Charles Card</div>
        {isDarkMode ? (
          <BsSunFill
            size="24px"
            color="#E9C46A"
            className="cursor-pointer"
            onClick={handleDarkMode}
          />
        ) : (
          <FaMoon
            size="24px"
            color="#E9C46A"
            className="cursor-pointer"
            onClick={handleDarkMode}
          />
        )}
      </div>
      <ul className="md:flex md:gap-10 ml-auto text-16 font-semibold">
        {openMenu && isMobile ? (
          <MdOutlineClose
            size="24px"
            className="cursor-pointer"
            onClick={handleMenu}
          />
        ) : !openMenu && isMobile ? (
          <HiOutlineMenu
            size="24px"
            className="cursor-pointer"
            onClick={handleMenu}
          />
        ) : (
          <>
            <li className="btn-hover">Feature</li>
            <li className="btn-hover">Menu</li>
            <li className="btn-hover">Our Story</li>
            <li className="btn-hover ml-28">Contact</li>
          </>
        )}

        {openMenu && (
          <div className="absolute right-8 z-10 bg-white p-8 text-center text-13 text-black">
            <li className="btn-hover">Feature</li>
            <li className="btn-hover">Menu</li>
            <li className="btn-hover">Our Story</li>
            <li className="btn-hover">Contact</li>
          </div>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
