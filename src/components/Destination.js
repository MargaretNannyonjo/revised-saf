import React from "react";

const Destination = () => {
  return (
    <>
      <div className="destination-page">
        <iframe
          className="google-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255344.48933228067!2d32.30375362499999!3d0.31598380000002063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbdf3744cad83%3A0xf63edbd5c8992c88!2sPIZZA%20BIG%20BEN!5e0!3m2!1sen!2sug!4v1714064308019!5m2!1sen!2sug"
          width="400"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Destination;
