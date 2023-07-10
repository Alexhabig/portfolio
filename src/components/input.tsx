interface IInputProps{
    type: 'text' | 'email' | 'password'| 'number',
    className?: string,
    value?: any
    placeholder:string,
    onChange?: (e:any)=>void
    text:any
}

const Input =(props:IInputProps)=>{
    return(
        <div className=" ">
            <h1>{props.text}</h1>
            <input type={props.type} className={`border border-black text-base bg-inherit peer rounded-sm py-2 px-1 w-full ${props.className}`} value={props.value} placeholder={props.placeholder} onChange={props.onChange}/>
        </div>
    );
}

export default Input