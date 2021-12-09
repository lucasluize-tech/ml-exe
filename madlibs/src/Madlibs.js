import { useState } from "react";
import MadlibsForm from "./MadlibsForm";

const Madlibs = () => {
  const INITIAL_STATE = {
    noun: "",
    noun2: "",
    adjective: "",
    color: "",
  };
  const [isDone, setDone] = useState(false);
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...formData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setDone(true);
  };
  const reset = () => {
    setDone(false);
    setFormData(INITIAL_STATE);
  };

  const phrase = () => {
    const { noun, noun2, adjective, color } = formData;
    return (
      <>
        <p>
          There was a {color} {noun} who loved a {adjective} {noun2}
        </p>
        <button onClick={reset}>Reset</button>
      </>
    );
  };

  const form = () => {
    return (
      <MadlibsForm
        data={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    );
  };

  return <div>{isDone ? phrase() : form()}</div>;
};

export default Madlibs;
