import React, { useState, useEffect } from "react";


import { json, useLocation } from "react-router-dom";

function EmailButton() {
  //Pulls formData
  const location = useLocation();
  const formData = location.state.formData || {};
  const handleClick = () => {

   

    
    // Set the email subject and body
    const subject = encodeURIComponent(`${formData.fname} ${formData.lname}'s Home Journey`);
    const body = encodeURIComponent(`Hello Lender,\n\nI am looking to move to the ${formData.area}area into a ${formData.bedroomsandBath} bedroom home and I would like to get preapproved for {price}.\n\nPlease reach out to me as soon you can.\n\n\n\nSincerely,\n${formData.fname} ${formData.lname}\n${formData.phoneNumber}}`);

    // Construct the email URL
    const url = `mailto:example@example.com?subject=${subject}&body=${body}`;

    // Open the email in the user's default email client
    window.open(url);
  }

  return (
    <button onClick={handleClick} className="mx-1.5 bg-[#715959] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Contact Lender!
          </button>
  );
}

export default EmailButton;