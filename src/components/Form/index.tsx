import { useForm, Controller, SubmitHandler } from "react-hook-form";

// Style
import "./index.css";
// Component
import FormMessage from "./FormMessage";
import FormIlustration from "../SvgComponents/FormIlustration";
import FormIlustrationMobile from "components/SvgComponents/FormIlustrationMobile";

interface FormData {
  email: string;
};

export default function Form() {
  const { handleSubmit, control, formState } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = data => console.log(data);

  return (
  <div className="form-container">
    <div className="mobileIlustration-container">
      <FormIlustrationMobile />
    </div>

    <div className="content-container">
      <FormMessage />
      <form onSubmit={handleSubmit(onSubmit)}> 
        <Controller
          name="email"
          control={control} 
          defaultValue="" 
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Invalid email address'
            }
          }}
          render={({ field }) => (
            <div>
              <div className="form-header">
                <p>Email address</p> 
                {formState.errors.email && <span className="form-errorMessage">Valid email required</span>}
              </div>
              <input type="email" {...field} placeholder="email@company.com" className={`form-input ${formState.errors.email ? "error" : ""}`} />  
            </div>
          )}
        />
        <button type="submit" className="form-button">Subscribe to monthly newsletter</button>  
      </form>
    </div>

    <div className="desktopIlustration-container">
      <FormIlustration />
    </div>
  </div>
  )
}
