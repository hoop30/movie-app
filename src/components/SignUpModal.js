import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom"
import { IoCloseOutline } from 'react-icons/io5'

export default function SignUpModal() {

  const { modalState, toggleModals, signUp } = useContext(UserContext);
  const navigate = useNavigate();
  const [validation, setValidation] = useState("");
  const inputs = useRef([])
  const formRef = useRef();
  
  // Store form input value on any change
  const addInputs = el => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el)
    }
  }

  // Test input value, send form and reset input value, or show error message
  const handleForm = async (e) => {
    e.preventDefault()

    if ((inputs.current[1].value.length || inputs.current[2].value.length) < 6) {
      setValidation("6 characters min")
      return;
    } else if (inputs.current[1].value !== inputs.current[2].value) {
      setValidation("Passwords do not match")
      return;
    }

    try {

      await signUp(
        inputs.current[0].value,
        inputs.current[1].value
      )
      // formRef.current.reset();
      setValidation("")
      // console.log(cred);
      toggleModals("close")
      navigate("/movie-app")
    } catch (err) {

      if (err.code === "auth/invalid-email") {
        setValidation("Email format invalid")
      }

      if (err.code === "auth/email-already-in-use") {
        setValidation("Email already used")
      }
    }
  }

  const closeModal = () => {
    setValidation("")
    toggleModals("close")
  }

  return (
    <>
      {modalState.signUpModal && (
        <div className="modal">
          <div onClick={closeModal} className="overlay">
          </div>
          <div className="modal-box">           
              
                <div className="modal-header">
                  <h5 className="modal-title">Sign Up</h5>
                  <button onClick={closeModal} className="btn-close-modal">
                    <IoCloseOutline size="2.8em"/>
                  </button>
                </div>

                <div className="modal-body">
                  <form ref={formRef} onSubmit={handleForm} className="sign-up-form">
                    <div className="input">
                      <input
                        ref={addInputs}
                        name="email"
                        required
                        type="email"
                        className="form-control"
                        id="signUpEmail"
                        placeholder="Email adress"
                      />
                    </div>

                    <div className="input">
                      <input
                        ref={addInputs}
                        name="pwd"
                        required
                        type="password"
                        className="form-control"
                        id="signUpPwd"
                        placeholder="Password"
                      />
                    </div>

                    <div className="input">
                      <input
                        ref={addInputs}
                        name="pwd"
                        required
                        type="password"
                        className="form-control"
                        id="repeatPwd"
                        placeholder="Repeat Password"
                      />
                      <p className="text-danger mt-1">{validation}</p>
                    </div>

                    <button className="btn-signin">Sign Up</button>
                  </form>
                </div>
                
                {/* switch to signIn modal */}
                <div className="modal-footer">
                  <p>Already an account</p>
                    <button onClick={() => toggleModals("signIn")}>Sign In</button>
                </div>
                       
          </div>
        </div>
      )}
    </>
  );
}
