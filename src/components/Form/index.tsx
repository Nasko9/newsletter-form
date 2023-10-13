import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useState } from "react";

// Style
import "./index.css";
// Component
import FormMessage from "./FormMessage";
import FormIlustration from "../SvgComponents/FormIlustration";
import FormIlustrationMobile from "components/SvgComponents/FormIlustrationMobile";
import CheckMarkIcon from "components/SvgComponents/CheckMarkIcon";
import FormButton from "./FormButton";

interface FormData {
  email: string;
};

export default function Form() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const { handleSubmit, control, formState } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = data => {
    setIsModalOpen(true); 
    setEmail(data.email)
  };

  const onCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
  <div className="form-container">
    {isModalOpen ? (
      <div className="modal-container">
        <div className="modal-content">
          <CheckMarkIcon size="56" />
          <h1 className="modal-header">Thanks for subscribing!</h1>
          <p className="modal-text">Aconfirmation email has been setn to <strong>{email}</strong>. Please open it and click the button inside to foncfirm your subscription.</p>
        </div>
        <FormButton label="Dismiss message" onClickHandler={onCloseModal}/>
      </div>
    )  : (
      <>
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
            <FormButton label="Subscribe to monthly newsletter" />
          </form>
        </div>

        <div className="desktopIlustration-container">
          <FormIlustration />
        </div>
      </>
    )}
  </div>
  )
}
