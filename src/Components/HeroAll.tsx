import { Typography, Container } from "@mui/material";
import "../index.css";

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
                fontSize: "6rem", 
                fontWeight: "bold",
                color: "#fff", 
                marginBottom: "1rem",
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              }}
            >
              {text}
            </Typography>
          </div>
          
          <div style={{ display: "flex", gap: "1.5rem", paddingTop: "2rem" }}>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroAll;
