import { MdArrowOutward } from "react-icons/md";
import SocialIcon from "./SocialIcon";

const iconsData = [
  "btn-in",
  "btn-facebook",
  "btn-instagram",
  "btn-blog",
  "btn-youtube",
  "btn-zigbang",
];

const Footer = () => {
  return (
    <div className="bg-black p-11 ">
      <footer className="max-w-[1080px] mx-auto">
        <div className="text-[#808080] flex justify-between items-center">
          <div>
            <button className="flex items-center text-sm font-semibold m-2">
              대한민국 서울특별시 강남구 영동대로 731, 지하 2층
              <MdArrowOutward className="" />
            </button>
            <p className="ml-2 text-sm font-semibold">© Zigbang Co., Ltd.</p>
          </div>
          <nav className="mt-5  flex items-center gap-3">
            {iconsData.map((v, i) => (
              <SocialIcon key={i} image={v} />
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
