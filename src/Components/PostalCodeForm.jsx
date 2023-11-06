import React, { useState } from 'react';
import '../Styles/PostalCodeForm.css';

const PostalCodeForm = ({ onFormSubmit }) => {
  const [postalCode, setPostalCode] = useState(400032);

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(postalCode);
  };

  return (
    <form className='form-style' onSubmit={handleSubmit}>
      <input className='user-input'
        type="text"
        placeholder="Enter postal code"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
      />
      <button className='submit-btn' type="submit">Get Location</button>
    </form>
  );
};

export default PostalCodeForm;