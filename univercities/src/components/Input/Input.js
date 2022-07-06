import Wrapper from "../../ui/Wrapper/Wrapper"

const Input = (props) => {
    return (
        <Wrapper>
        <input
          ref={props.ref}
          onChange={props.onChange}
          className={props.className}
          placeholder={props.placeholder}
          type={props.type}
        />
        <br />
        </Wrapper>
       
    )
}

export default Input