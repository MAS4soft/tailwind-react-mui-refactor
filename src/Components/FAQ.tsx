// src\Components\FAQ.tsx
import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { faqData } from './FAQData';

const FAQ: React.FC = () => {
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange = (panel: number) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <Typography variant="h3" component="h2" gutterBottom>
        Frequently Asked Questions
      </Typography>
      {faqData.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1" style={{ fontWeight: 'bold'  }}>
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{  color :'black' }}>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
