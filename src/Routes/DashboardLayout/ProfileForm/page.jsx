import { useState } from "react";
import FormInput from "../../../Components/FormInput/FormInput";
import "./ProfileForm.css";
import registerInstance from "../../../Utils/registerInstance";

function ProfileForm() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    image: null,
  });

  const [showToast, setShowToast] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [imagePreview, setImagePreview] = useState("");
  const [fileInputKey, setFileInputKey] = useState(Date.now());
  const [toastData, setToastData] = useState({ username: "", image: "" });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
    {
      id: 5,
      name: "phone",
      type: "text",
      placeholder: "Phone",
      errorMessage: "Phone number should be a valid 10-14 digits number!",
      label: "Phone",
      pattern: `^\\d{10,14}$`,
      required: true,
    },
  ];

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setValues({ ...values, image: file });

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setValues({ ...values, image: null });
    setImagePreview("");
    setFileInputKey(Date.now());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      values.username &&
      values.email &&
      values.password &&
      values.confirmPassword &&
      values.password === values.confirmPassword &&
      values.phone.match(/^\d{10,14}$/)
    ) {
      setFormValid(true);
      setShowToast(true);

      setToastData({
        username: values.username,
        image: imagePreview,
      });

      const formData = new FormData();
      formData.append("name", values.username);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("password", values.password);
      if (values.image) {
        formData.append("image", values.image);
      }

      registerInstance
        .post("/submit", formData)
        .then((response) => {
          console.log("Success:", response.data);
          setValues({
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            phone: "",
            image: null,
          });
          setImagePreview("");
          setFileInputKey(Date.now());
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      setTimeout(() => {
        setShowToast(false);
      }, 3500);
    } else {
      setFormValid(false);
      alert(
        "Please Fill in All The Fields Correctly Before Submitting The Form 🌹"
      );
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="dash-title">CREATE USER</h2>
      <p>Create a New User Profile</p>
      {inputs.map((input) => (
        <FormInput
          key={input.id}
          {...input}
          value={values[input.name]}
          onChange={onChange}
        />
      ))}

      <div className="form-item">
        <label htmlFor="image" className="form-label">
          Upload Image:
        </label>
        <input
          key={fileInputKey}
          className="form-image"
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>

      {imagePreview && (
        <div className="image-preview">
          <img
            src={imagePreview}
            alt="Image Preview"
            className="uploaded-image"
          />
          <button className="remove-image" onClick={removeImage}>
            &times;
          </button>
        </div>
      )}

      {!formValid && (
        <p className="error-message">Please fill all fields correctly!</p>
      )}

      <button className="form-link" type="submit">
        Submit
      </button>

      {showToast && (
        <div className="toast">
          <p style={{ marginBottom: "10px" }}>
            Welcome <strong>{toastData.username}</strong>!
          </p>
          {toastData.image && (
            <img
              src={toastData.image}
              alt="Uploaded Image"
              className="uploaded-image"
            />
          )}
        </div>
      )}
    </form>
  );
}

export default ProfileForm;
