import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { Business, HistoryEdu, HomeWork } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'; // استيراد useNavigate

const AboutInfo: React.FC = () => {
  const navigate = useNavigate(); // إنشاء دالة التوجيه

  const handleButtonClick = () => {
    navigate('/services'); // التوجيه إلى المسار المحدد
  };

  return (
    <Box sx={{ py: 2 }}>
      <Grid container spacing={4} alignItems="stretch">
        {/* الجزء الأيسر: النصوص والزر */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ mb: 6, maxWidth: '100%' }}>
            <Typography variant="h5" color="#FFC107"  gutterBottom>
              About Us
            </Typography>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              We Are Leading International Company In The World
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            </Typography>
            <Button 
              variant="contained" 
              sx={{ backgroundColor: '#FFC107', color: "#000",
                "&:hover": {
                  bgcolor: "#FFEA00",
                }, mt: 2 }}
              onClick={handleButtonClick} // إضافة دالة التوجيه عند الضغط
            >
              OUR SERVICES
            </Button>
          </Box>
        </Grid>
        
        {/* الجزء الأيمن: المواضيع */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, maxWidth: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Business sx={{ fontSize: 40, color: '#FFC107', mr: 2 }} />
              <Box>
                <Typography variant="h4" fontWeight="bold">
                  Building Staffs
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <HistoryEdu sx={{ fontSize: 40, color: '#FFC107', mr: 2 }} />
              <Box>
                <Typography variant="h4" fontWeight="bold">
                  History Emphasis
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <HomeWork sx={{ fontSize: 40, color: '#FFC107', mr: 2 }} />
              <Box>
                <Typography variant="h4" fontWeight="bold">
                  Economic Outcomes
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutInfo;
