import React from 'react';

const Address = () => {
  return (
    <div id='address' className="bg-blue-900 text-white px-3 py-4 m-1 rounded-lg w-full">
      <div className="text-yellow-400 text-xl font-bold">PT. E-NEWS</div>
      <div>Universitas Pembangunan Jaya, Jl. Sawah Baru dll</div>
      <div>Email: e-news@gmail.com</div>
      <div className="mt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2394.4723968735657!2d106.7245434591526!3d-6.292126069229759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f007dedc7de1%3A0x70288cde58f42a97!2sPembangunan%20Jaya%20University!5e0!3m2!1sen!2sid!4v1718224460118!5m2!1sen!2sid"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="w-full h-96 rounded-lg"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Address;