// src/Components/Map.tsx

interface MapProps {
  mapSrc: string;
}

const Map = ({ mapSrc }: MapProps) => {
  return (
    <div style={{ width: "100%", height: "400px", marginTop: "20px" }}>
      <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
