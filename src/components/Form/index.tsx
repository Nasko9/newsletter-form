// Style
import "./index.css";

// Component
import FormContent from "./FormContent";
import FormIlustration from "./FormIlustration";

export default function Form() {
  return (
  <div className="form-container">
    <div className="content-container"><FormContent /></div>
   <FormIlustration/>
  </div>
  )
}
