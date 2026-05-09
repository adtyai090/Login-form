import React, { useRef } from "react";
import { useState } from "react";
import Input from "./Input";
import { CiEdit } from "react-icons/ci";

function Form1() {
  const [step, setStep] = useState(1);
  // const [isEditing, setIsEditing] = useState(false);

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const inputRefs = useRef({});

  const handleEdit = (stepValue, fieldName) => {
    setStep(stepValue);

    setTimeout(() => {
      inputRefs.current[fieldName]?.focus();
    }, 0);
    console.log("inputRefs.current.firstName", inputRefs.current);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const formSubmit = (e) => {
  //   e.preventDefault();
  //   setStep(3);
  //   console.log('first', first)
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // setFormData({
    //   firstName: "",
    //   lastName: "",
    //   email: "",
    //   phone: "",
    //   message: "",
    // });
  };

  // useEffect(() => {
  //   if (step === 1) {
  //     inputRefs.current.firstName?.focus();
  //   }
  // }, [step]);

  return (
    <div className="main_form_sec py-15 bg-pink-100 w-full h-lvh ">
      <div className="form_content flex justify-center items-center w-5/12 h-full mx-auto">
        <form action="" onSubmit={handleSubmit} className="w-full">
          {step === 1 && (
            <div className="step1 shadow-2xl px-6 pt-12 pb-14 rounded-2xl bg-white">
              <h1 className="text-black text-[42px] font-bold text-center mb-4.5 uppercase">
                Sign <span className="text-pink-500 ">Up</span>
              </h1>
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    // onBlur={() => setIsEditing(false)}
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    z
                    onChange={handleChange}
                    errors={errors}
                    // isEditing={isEditing}
                    inputRef={(el) => {
                      inputRefs.current.firstName = el;

                      console.log("El", el);
                    }}
                  />

                  <Input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    errors={errors}
                    inputRef={(el) => (inputRefs.current.lastName = el)}
                  />

                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Id:"
                    value={formData.email}
                    onChange={handleChange}
                    errors={errors}
                    // onBlur={() => setIsEditing(false)}
                    // isEditing={isEditing}
                    inputRef={(el) => (inputRefs.current.email = el)}
                  />

                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone No:"
                    value={formData.phone}
                    errors={errors}
                    onChange={handleChange}
                    inputRef={(el) => (inputRefs.current.phone = el)}
                  />
                </div>

                <button
                  type="button"
                  onClick={() => {
                    let errorList = {};
                    if (!formData.firstName) {
                      errorList.firstName = "First Name is required";
                    }
                    if (!formData.lastName) {
                      errorList.lastName = "Last Name is required";
                    }
                    if (!formData.email) {
                      errorList.email = "Email is required";
                    }
                    if (!formData.phone) {
                      errorList.phone = "Phone is required";
                    }
                    setErrors(errorList);

                    if (Object.keys(errorList).length === 0) {
                      setStep(step + 1);
                    }
                  }}
                  className={
                    !(
                      formData.firstName ||
                      formData.lastName ||
                      formData.email ||
                      formData.phone
                    )
                      ? "p-4 rounded-xl uppercase font-semibold text-md  bg-pink-300 text-white cursor-not-allowed"
                      : "p-4 rounded-xl uppercase font-semibold text-md bg-pink-400 text-white"
                  }
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="step2 shadow-2xl px-6 pt-12 pb-14 rounded-2xl bg-white ">
              <h1 className="text-black text-[42px] font-bold text-center mb-4.5 uppercase">
                Sign <span className="text-pink-500 ">Up</span>
              </h1>
              <div className="flex flex-col gap-2 ">
                <textarea
                  name="message"
                  className="p-4 rounded-xl bg-gray-100  outline-0 h-50 w-full"
                  onChange={handleChange}
                  required
                  value={formData.message}
                  placeholder="Message"
                  id=""
                ></textarea>

                <div className="flex align-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="p-4 rounded-xl uppercase font-semibold text-md bg-gray-500 text-white w-full"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    onClick={() => setStep(step + 1)}
                    className="p-4 rounded-xl uppercase font-semibold text-md bg-pink-400 text-white w-full"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="step2 shadow-2xl px-6 pt-12 pb-14 rounded-2xl bg-white ">
              <h1 className="text-black text-[42px] font-bold text-center mb-4.5 uppercase">
                Sign <span className="text-pink-500 ">Up</span>
              </h1>
              <div className="flex flex-col gap-4 ">
                <div className="account-info">
                  <ul>
                    <li className="mb-2 text-md flex items-center justify-between p-4 bg-gray-100 rounded-2xl">
                      <div>
                        <b className="text-lg text-pink-500">Name: </b>
                        {formData.firstName}
                        {formData.lastName}
                      </div>
                      <span
                        className=""
                        onClick={() => {
                          handleEdit(1, "firstName");
                        }}
                      >
                        <CiEdit className="text-2xl" />
                      </span>
                    </li>
                    <li className="mb-2 text-md flex items-center justify-between p-4 bg-gray-100 rounded-2xl">
                      <div>
                        <b className="text-lg text-pink-500">Mobile No: </b>
                        {formData.phone}
                      </div>
                      <span
                        className=""
                        onClick={() => {
                          handleEdit(1, "phone");
                        }}
                      >
                        <CiEdit className="text-2xl" />
                      </span>
                    </li>
                    <li className="mb-2 text-md flex items-center justify-between p-4 bg-gray-100 rounded-2xl">
                      <div>
                        <b className="text-lg text-pink-500">Email Id: </b>{" "}
                        {formData.email}
                      </div>
                      <span
                        className=""
                        onClick={() => {
                          handleEdit(1, "email");
                        }}
                      >
                        <CiEdit className="text-2xl" />
                      </span>
                    </li>
                    {formData.message && (
                      <li className="mb-2 text-md flex items-center justify-between p-4 bg-gray-100 rounded-2xl">
                        <div>
                          <b className="text-lg text-pink-500"> Message: </b>{" "}
                          {formData.message}
                        </div>
                        <span
                          className=""
                          onClick={() => {
                            handleEdit(2);
                          }}
                        >
                          <CiEdit className="text-2xl" />
                        </span>
                      </li>
                    )}
                  </ul>
                </div>

                <div className="flex align-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={() => setStep(step -1)}
                    className="p-4 rounded-xl uppercase font-semibold text-md bg-gray-500 text-white w-full"
                  >
                    Back
                  </button>
                  {/* <button
                  type="button"
                  onClick={() =>{setClickBtn} }
                  className="p-4 rounded-lg bg-pink-500 text-white"
                >
                  Edit
                </button> */}
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="p-4 rounded-xl uppercase font-semibold text-md bg-pink-400 text-white w-full"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Form1;
