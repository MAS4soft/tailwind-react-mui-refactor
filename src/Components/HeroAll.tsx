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
              sx={{
                fontSize: {
                  xl: '10rem',
                  l: '8rem',
                  m: '6rem',
                  xs: '3rem', 
                  sm: '4rem'  
                }
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
