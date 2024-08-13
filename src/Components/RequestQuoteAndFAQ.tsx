// src/Components/RequestQuoteAndFAQ.tsx

import { Box } from "@mui/material";
import RequestQuote from "./RequestQuote";
import FAQ from "./FAQ";

const RequestQuoteAndFAQ = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      alignItems="center"
      justifyContent="center"
    >
      <Box
        width={{ xs: "100%", md: "48%" }}
        mb={{ xs: 4, md: 0 }}
        mr={{ md: 2 }}
      >
        <RequestQuote />
      </Box>
      <Box
        width={{ xs: "100%", md: "48%" }}
        mb={{ xs: 4, md: 0 }}
        display="flex"
        alignItems="center"
      >
        <FAQ />
      </Box>
    </Box>
  );
};

export default RequestQuoteAndFAQ;
