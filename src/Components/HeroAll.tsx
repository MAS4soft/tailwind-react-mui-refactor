import { Typography, Container } from "@mui/material";
import "../index.css";

// تعريف نوع خاصية HeroAll
interface HeroAllProps {
  text: string;
}

const HeroAll: React.FC<HeroAllProps> = ({ text }) => {
  return (
    <div className="heroAll">
      <Container className="heroAll-content">
        <div style={{ display: "flex", flexDirection: "column", color: "#fff" }}>
          <div style={{ paddingTop: "2rem" }}>
            <Typography
              variant="h1"
              style={{
                fontSize: "6rem", // زيادة حجم النص
                fontWeight: "bold",
                color: "#fff", // جعل النص أبيض
                marginBottom: "1rem",
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              }}
            >
              {text}
            </Typography>
          </div>
          
          <div style={{ display: "flex", gap: "1.5rem", paddingTop: "2rem" }}>
            {/* محتوى إضافي */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroAll;
