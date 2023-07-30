import Footerbg from "../../assets/svg/footer2.svg";
import React from "react";
import Iconbtn from "../iconbtn";
import * as fa from "react-icons/fa";
import * as ri from "react-icons/ri";

const Footer2 = () => {
  const openInNewtab = (url: string) => {
    window.open(url, "blank", "noopener,noreferrer");
  };
  return (
    <div
      className="laptop:px-36 phone:px-5 py-10 sm:px-20"
      id="about"
      style={{
        backgroundImage: `url(${Footerbg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex gap-5 text-white">
          <Iconbtn
            icon={<fa.FaFacebookF />}
            classname=" rounded-full border hover:bg-purple-800 hover:border-purple-800 border-teal-50 p-3"
            onClick={() =>
              openInNewtab("https://www.facebook.com/alex.habig19")
            }
          ></Iconbtn>

          <Iconbtn
            icon={<ri.RiInstagramFill />}
            classname=" rounded-full border hover:bg-purple-800 hover:border-purple-800 border-teal-50 p-3"
            onClick={() => openInNewtab("https://www.instagram.com/alx_hbg/")}
          ></Iconbtn>

          <Iconbtn
            icon={<fa.FaLinkedin />}
            classname=" rounded-full border hover:bg-purple-800 hover:border-purple-800 border-teal-50  p-3"
            onClick={() =>
              openInNewtab(
                "https://www.linkedin.com/in/alexander-habig-b683aa149/"
              )
            }
          ></Iconbtn>

          <Iconbtn
            icon={<fa.FaGithub />}
            classname=" rounded-full border hover:bg-purple-800 hover:border-purple-800 border-teal-50 p-3"
            onClick={() => openInNewtab("https://github.com/Alexhabig")}
          ></Iconbtn>
        </div>
        <div className="w-[80%] h-[2px] bg-white rounded-md" />
        <div className="w-[100%] h-[2px] bg-white rounded-md" />
        <small className="text-white">
          Copyright © Alexander Habig 2023-2024. All Rights Reserve
        </small>
      </div>
    </div>
  );
};

export default Footer2;
