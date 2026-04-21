import "./Button.css";

export function Button(props) {
  const { disabled, buttonText } = props;
  return (
    <>
      <button disabled={disabled}>{buttonText}</button>
    </>
  );
}

export default Button;
