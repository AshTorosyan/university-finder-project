

const Input = (props) => {
    return (
        <input
          ref={props.propsRef}
          onChange={props.onChange}
          className={props.className}
          placeholder={props.placeholder}
          type={props.type}
        />
       
    )
}

export default Input