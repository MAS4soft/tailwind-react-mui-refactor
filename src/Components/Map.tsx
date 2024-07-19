
const Map = () => {
  return (
    <div style={{ width: "100%", height: "400px", marginTop: "20px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d207.02607335185516!2d18.64480224507782!3d-33.87890830852918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDUyJzQ0LjEiUyAxOMKwMzgnNDEuNCJF!5e0!3m2!1sen!2sza!4v1721391592875!5m2!1sen!2sza" 
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}  // تعديل هنا
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
