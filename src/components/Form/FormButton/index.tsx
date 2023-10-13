import './index.css';

interface IFormButton {
    label: string;
    onClickHandler?: ()=>void;
}

export default function FormButton({label, onClickHandler} : IFormButton) {
  return (
    <button onClick={onClickHandler} type="submit" className="form-button">{label}</button>  
  )
}
