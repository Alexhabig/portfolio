interface IButtonProps {
  classname?: string;
  text?: string;
  icon?: any;
  onClick?: () => void;
  value?: any;
  type?: any;
  disable?: boolean;
}

const Button = (props: IButtonProps) => {
  return (
    <div className="place-self-center sm:text-xl text-base">
      <button
        disabled={props.disable}
        type={props.type}
        className={`bg-gray-50 text-gray-900 py-2 px-9 flex items-center gap-3  ${props.classname}`}
        onClick={props.onClick}
        value={props.value}
      >
        {" "}
        {props.text} {props.icon}
      </button>
    </div>
  );
};

export default Button;
