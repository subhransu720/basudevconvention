'use client';

const MapComponent = () => {
  return (
    <div className="w-full h-[400px] rounded-lg shadow-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3792.768562326388!2d85.8522917!3d20.2165596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a1004561a639%3A0xd34c94fa743c4bbf!2sVasudev%20Convention!5e1!3m2!1sen!2sin!4v1743077018500!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Vasudev Convention Location"
      />
    </div>
  );
};

export default MapComponent; 