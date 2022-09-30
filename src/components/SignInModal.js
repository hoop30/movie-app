import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { IoCloseOutline } from 'react-icons/io5'


export default function SignInModal() {
  const { modalState, toggleModals, signIn } = useContext(UserContext);

  const navigate = useNavigate();

  const [validation, setValidation] = useState("");

  const inputs = useRef([]);
  inputs.current = []
  const addInputs = (el) => {

    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el)
    }
  };

  const formRef = useRef();

  const handleForm = async (e) => {
    e.preventDefault();
    console.log(inputs);
    
    try {
      await signIn(
        inputs.current[0].value,
        inputs.current[1].value
      )
      
      setValidation("");
      toggleModals("close");
      navigate("/movie-app");
    } catch {
      setValidation("Email and/or password incorrect")
    }
  };

  const closeModal = () => {
    setValidation("");
    toggleModals("close");
  };

  return (
    <>
      {modalState.signInModal && (
        <div className="modal">
        <div onClick={closeModal} className="overlay">
        </div>
        <div className="modal-box">           
            
              <div className="modal-header">
                <h5 className="modal-title">Sign In</h5>
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
                    <p className="text-danger mt-1">{validation}</p>
                  </div>

                  <button className="btn-signin">Sign In</button>
                </form>
              </div>
              
              <div className="modal-footer">
                <p>first visit to Movie-app</p>
                  <button onClick={() => toggleModals("signUp")}>Sign Up</button>
              </div>
                     
        </div>
      </div>
      )}
    </>
  );
}
