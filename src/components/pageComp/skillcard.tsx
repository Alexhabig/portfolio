import React from "react";
interface Props {
  icon?: any;
  language?: string;
  skillperc?: string;
  skillbar?: any;
  iconColor?: any;
}

const Skillcard = (props: Props) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center text-lg px-3">
          <div className="flex gap-3 items-center">
            <i className={`${props.iconColor} text-3xl`}>
              <props.icon />
            </i>
            <h1> {props.language}</h1>
          </div>
          <p className="text-gray-500">{props.skillperc}</p>
        </div>

        <div className="w-full h-[.4rem] bg-purple-400 rounded-full">
          <div
            className={`w-[${props.skillbar}] bg-purple-600 h-[.4rem] rounded-full`}
          />
        </div>
      </div>
    </>
  );
};

export default Skillcard;
