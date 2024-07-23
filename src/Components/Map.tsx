
const Map = () => {
  return (
    <div style={{ width: "100%", height: "400px", marginTop: "20px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d289.00556657183665!2d18.64482933903889!3d-33.87890430117276!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5100765f3055%3A0xf3c9984259b8e454!2sArmadia!5e0!3m2!1sen!2sza!4v1721655921574!5m2!1sen!2sza" 
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}  // تعديل هنا
        loading="lazy"
      ></iframe>
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d289.00556657183665!2d18.64482933903889!3d-33.87890430117276!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5100765f3055%3A0xf3c9984259b8e454!2sArmadia!5e0!3m2!1sen!2sza!4v1721655921574!5m2!1sen!2sza" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
    </div>
  );
};

export default Map;
