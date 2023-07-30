interface IInputProps {
  type: "text" | "email" | "password" | "number";
  className?: string;
  value?: any;
  placeholder?: string;
  onChange?: (e: any) => void;
  text?: any;
  req?: boolean;
  name?: string;
}

const Input = (props: IInputProps) => {
  return (
    <div className="w-full ">
      <h1>{props.text}</h1>
      <input
        name={props.name}
        required={props.req}
        type={props.type}
        className={` border border-gray-300  bg-inherit peer rounded-sm py-2 px-1 w-full ${props.className}`}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
