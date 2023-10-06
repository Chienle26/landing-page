import { useEffect, useState } from "react";
import Content from "./components/Content/Content";
import NavBar from "./components/NavBar/NavBar";
import Slogan from "./components/Slogan/Slogan";

export default function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    heigh: undefined,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        // Get width and heigh of window
        width: window.innerWidth,
        heigh: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  useEffect(() => {
    windowSize.width < 500 ? setIsMobile(true) : setIsMobile(false);
  }, [windowSize]);

  return (
    // overflow-y-auto overflow-x-hidden chỉ scroll dọc ko scroll ngang được
    <div className="md:px-20 font-sora h-screen overflow-y-auto overflow-x-hidden px-4 py-8 bg-gradient-to-b dark:from-purple-900 dark:to-purple-700 from-white to-pink-500 dark:text-white text-black">
      <NavBar isMobile={isMobile} />
      <Slogan />
      <Content />
    </div>
  );
}
