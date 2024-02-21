import React from 'react';

function PrivacyPolicy() {
  return (
    <>
      <div className="min-h-screen p-6">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow-md">
          <h1 className="text-3xl font-semibold mb-6 text-[#ff5c2a]">Privacy Policy</h1>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
            <p>We collect personal information from you in various ways, including:</p>
            <ul className="list-disc pl-6 text-gray-500">
              <li>Information you provide when applying for our educational programs or using our services.</li>
              <li>Information collected automatically when you interact with our website or educational platform.</li>
              <li>Information provided by third parties with whom you have authorized the sharing of your personal information.</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. Use of Personal Information</h2>
            <p>We may use your personal information for the following purposes:</p>
            <ul className="list-disc pl-6 text-gray-500">
              <li>Process your application for educational programs.</li>
              <li>Provide and improve our educational services.</li>
              <li>Communicate with you regarding educational updates, program details, and personalized offers.</li>
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className='text-gray-500'>
              If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at{' '}
              <a href="mailto:info@vagusoverseaseducation.ind.in" className="text-blue-500">info@vagusoverseaseducation.ind.in</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;
