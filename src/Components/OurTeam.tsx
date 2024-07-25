

import { Box, Typography, Grid, Avatar } from '@mui/material';

const teamMembers = [
  {
    name: 'Kal Attia',
    image: 'https://scontent-cpt1-1.xx.fbcdn.net/v/t31.18172-8/12239270_1166371866723609_3834577204263080685_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeF5TPXsk7KFzDE4uXAOgnQ2Bij9cyaJrsEGKP1zJomuwVDOVZeL_R6vIHwJAkm6_To&_nc_ohc=Z0AgSmizUSUQ7kNvgEIKACM&_nc_ht=scontent-cpt1-1.xx&oh=00_AYDTSnQH_cpoCmGcOmnm0ISW4Zd_iJcVaFlDiEQZ3fx7mA&oe=66C5B363', // استبدل هذا المسار بمسار الصورة الفعلي
    position: 'CEO',
    description: 'Kal is the CEO of the company with over 20 years of experience.',
  },
  {
    name: 'Mido Shawky',
    image: 'https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/448591170_10232860712239115_5874388634725478478_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHS87vU8fj6X3gsTTfqD0wvrz4yw-L_jxmvPjLD4v-PGSmBKflZV-aTqp7fQud0CXU&_nc_ohc=ju2sKKrEI7QQ7kNvgFhvbZa&_nc_ht=scontent-cpt1-1.xx&oh=00_AYDjAaK0E5ZvHt2t1LjOmM74FuJLASpiBbaCjaqyk2Iirg&oe=66A42276', // استبدل هذا المسار بمسار الصورة الفعلي
    position: 'CTO',
    description: 'Mido is the CTO and leads the technology department.',
  },
  {
    name: 'Zaaaaaahid',
    image: '../src/assets/zaahid.jpg', // استبدل هذا المسار بمسار الصورة الفعلي
    position: 'CFO',
    description: 'Ay is the CFO and manages the company finances.',
  },
];

const    OurTeam: React.FC = () => {
  return (
    <Box sx={{ mt: 6 , px: 24 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Team
      </Typography>
      <Grid container spacing={4}>
        {teamMembers.map((member) => (
          <Grid item xs={12} sm={6} md={4} key={member.name}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Avatar
                alt={member.name}
                src={member.image}
                sx={{ width: 100, height: 100, mb: 2 }}
              />
              <Typography variant="h6" gutterBottom>
                {member.name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                {member.position}
              </Typography>
              <Typography variant="body1" align="center">
                {member.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurTeam;
