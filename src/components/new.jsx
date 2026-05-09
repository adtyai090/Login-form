import React, { useRef, useState } from "react";
import Input from "./Input";
import FormStep from "./FormStep";

function FormStep1() {
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(1);
  const [error, setError] = useState({});

  console.log(error);
  console.log(formData, "formData");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (error[e.target.name]) {
      setError({
        ...error,
        [e.target.name]: "",
      });
    }
  };

  const handleNext = () => {
    let errorvalue = {};
    if (!formData.fullname) {
      errorvalue.fullname = "Name is required";
    }

    if (!formData.email) {
      errorvalue.email = "Email is required";
    }
    if (!formData.number) {
      errorvalue.number = "Number is required";
    }

    setError(errorvalue);

    console.log(errorvalue, "errorvalue");

    // Only move to next step if there are no errors
    if (Object.keys(errorvalue).length === 0) {
      setStep((prev) => prev + 1);
    }
  };

  const inputRef = useRef(null);

  // Focus input when step changes to 1
  React.useEffect(() => {
    console.log(inputRef, " inputRef.current");
    if (step === 1 && inputRef.current) {
      inputRef.current.focus();
    }
  }, [step]);

  const handleFocus = () => {
    // No-op: focus is handled by useEffect
  };

  //   if (Object.keys(errorList).length > 0) {
  //   if (errorList.firstName) {
  //     firstNameRef.current.focus();
  //   } else if (errorList.lastName) {
  //     lastNameRef.current.focus();
  //   } else if (errorList.email) {
  //     emailRef.current.focus();
  //   } else if (errorList.phone) {
  //     phoneRef.current.focus();
  //   }
  // }
  return (
    <>
      <div className="form-parent  flex  justify-center align-items-center h-[100vh] px-5 py-10 bg-gray-100">
        <div className="p-10 align-content-center justify-center align-items-center flex form-child  w-[80%]">
          <div className="form-card w-[50%] px-5 py-6 ">
            <div class="quote-header">
              <h1>Get a project quote</h1>
              <p>
                Please fill the form below to receive a quote for your project.
                Feel free to add as much detail as needed.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              action="flex flex-row gap-4 flex-wrap justify-center "
            >
              <FormStep value={step} />
              {step === 1 && (
                <div>
                  <div className="form-grid">
                    <Input
                      error={error}
                      inputRef={inputRef}
                      value={formData.fullname}
                      text="text"
                      placeholder="Enter your Name"
                      name="fullname"
                      changeFunction={handleOnChange}
                      label="Name"
                    />
                    <Input
                      error={error}
                      value={formData.email}
                      text="email"
                      placeholder="Enter your Email"
                      name="email"
                      changeFunction={handleOnChange}
                      label="Email"
                    />
                    <Input
                      error={error}
                      value={formData.number}
                      text="tel"
                      placeholder="Enter your name"
                      name="number"
                      changeFunction={handleOnChange}
                      label="Phone Number"
                    />
                    <Input
                      error={error}
                      value={formData.company}
                      text="text"
                      placeholder="Enter your Company"
                      name="company"
                      changeFunction={handleOnChange}
                      label="Company"
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <textarea
                    placeholder="Enter Yor text"
                    className="bg-gray-700 rounded-lg w-full mb-2 p-3 text-white"
                  ></textarea>
                </div>
              )}
              {step === 3 && (
                <div>
                  <div className="form-grid">
                    <h3>
                      Name:{formData.fullname}{" "}
                      <button
                        onClick={() => {
                          setStep(1);
                          handleFocus();
                        }}
                      >
                        Edit
                      </button>{" "}
                    </h3>
                    <h3>
                      Email:{formData.email}{" "}
                      <button
                        onClick={() => {
                          setStep(1);
                          handleFocus();
                        }}
                      >
                        Edit
                      </button>
                    </h3>
                    <h3>
                      Company:{formData.number}{" "}
                      <button
                        onClick={() => {
                          setStep(1);
                          handleFocus();
                        }}
                      >
                        Edit
                      </button>
                    </h3>
                  </div>
                </div>
              )}

              <div>
                {step === 1 ? (
                  <button
                    type="button"
                    className="submit-btn mt-5"
                    onClick={() => {
                      handleNext();
                    }}
                  >
                    <span>Next step</span>
                  </button>
                ) : (
                  <div className="flex justify-between align-items-center">
                    <button
                      type="button"
                      className="submit-btn mt-5"
                      onClick={() => setStep((prev) => prev - 1)}
                    >
                      <span>Prev</span>
                    </button>
                    <button
                      type="button"
                      className={step === 4 ? "hidden" : "submit-btn mt-5"}
                      onClick={() => setStep((prev) => Math.min(prev + 1, 4))}
                    >
                      <span>Next step</span>
                    </button>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormStep1;
