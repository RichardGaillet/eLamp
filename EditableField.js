import React, { useState } from 'react'

export default function EditableField() {

  const [state, setState] = useState({
    name: "",
    value: "",
    mode: "read-only"
  });

  const { name, value, mode } = state;

  const handleMode = () => {
    if (mode === "read-only") {
      setState({ mode: "edit" })
    } else {
      setState({ mode: "read-only" })
    }
  }

  const handleChange = (e) => {
    setState({ name: e.target.value });
  };

  const handleSubmit = () => {
    alert('Submitted!');
  };

  return (
    <>
      <form>
        <div>
          <label>
            Name
            <div>
              <input type='text' name='name' onChange={e => handleChange(e)} onFocus={handleMode} onBlur={handleMode} />
            </div>
          </label>
          {mode === 'edit' &&
            <input type='Submit' onSubmit={handleSubmit}
            />}
        </div>
      </form>
    </>
  )
};
