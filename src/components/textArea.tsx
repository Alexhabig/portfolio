import React from "react";

interface Props {
  className?: string;
  value?: any;
  placeholder?: string;
  onChange?: (e: any) => void;
  text?: string;
  name?: string;
}

const TextArea = (props: Props) => {
  return (
    <>
      <div className="w-full ">
        <p>{props.text}</p>
        <textarea
          name={props.name}
          required
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
          className="rounded px-2 py-3 resize-none h-32 border broder-gray-300 w-full"
        ></textarea>
      </div>
    </>
  );
};

export default TextArea;
