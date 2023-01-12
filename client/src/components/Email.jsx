import React from 'react';

function EmailButton() {
  const handleClick = () => {

    //Pulls for
    // Set the email subject and body
    const subject = encodeURIComponent('Example Email');
    const body = encodeURIComponent('Hello,\n\nThis is an example email.\n\nSincerely,\n[Your Name]');

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