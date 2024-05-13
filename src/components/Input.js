
const classes = 'form-control text-right w-full px-3  text-gray-700 rounded border border-solid border-gray-300 focus:border-pink-600 focus:outline-none'
const names = 'form-control text-right w-1/2 px-3  text-gray-700 rounded border border-solid border-gray-300 focus:border-pink-600 focus:outline-none'

const Input = ({ name, label, register, errors, required, type, validationSchema, size,style,classnames}) => (
    <div className="form-control mt-1  w-full flex-col md:flex-row ">
      {/* <label htmlFor={name} className="block me-3 flex text-gray-700 text-sm font-bold mb-2">
        {label}
      form-control mt-1 flex justify-between ps-2 w-full flex-col md:flex-row  
      </label> */}
      <label htmlFor={name} className="block  word-normal text-md">
        {label}
       
      </label>
      { type === 'textarea' ? 
                (<textarea style={style} className={classes} id={name} name={name} type={type} {...register(name, validationSchema)}/>)
                :
                (<input size={size?size:''} style={style}  className={classnames?classnames:classes} id={name} name={name} type={type} {...register(name, validationSchema)}/>)
                }
      
      
      {errors && (errors[name]?.type === "required" || errors[name]?.type === "minLength" || errors[name]?.type === "pattern" || errors[name]?.type === "server" ) && (
        <span className="text-red-500 text-xs italic w-10 break-words">{errors[name]?.message}</span>
      )}
      {/* {errors && errors[name]?.type === "minLength" && (
        <span className="text-red-500 text-xs italic w-10 break-words">{errors[name]?.message}</span>
      )}
      {errors && errors[name]?.type === "pattern" && (
        <span className="text-red-500 text-xs italic w-10 break-words">{errors[name]?.message}</span>
      )}
       {errors && errors[name]?.type === "server" && (
        <span className="text-red-500 text-xs italic w-25 break-words">{errors[name]?.message}</span>
      )} */}
      </div>
    
  );
  export default Input;