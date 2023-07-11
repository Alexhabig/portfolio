interface IButtonProps{
    classname?:string,
    text?:string,
    icon?:any,
    onClick?:()=>void,
    value?:any
}

const Button = (props:IButtonProps) =>{
    return(
        <div className="place-self-center sm:text-xl text-base">
            <button className={`bg-gray-50 text-gray-900 py-2 px-9 flex items-center gap-3 hover:bg-gray-500  hover:text-gray-50 ${props.classname}`} onClick={props.onClick} value={props.value}> {props.text} {props.icon}</button>
        </div>
    )
}

export default Button