import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';

const founders = [
  {
    name: "KHALED ATTIA",
    title: "CEO",
    image: 'https://scontent-cpt1-1.xx.fbcdn.net/v/t31.18172-8/12239270_1166371866723609_3834577204263080685_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeF5TPXsk7KFzDE4uXAOgnQ2Bij9cyaJrsEGKP1zJomuwVDOVZeL_R6vIHwJAkm6_To&_nc_ohc=Z0AgSmizUSUQ7kNvgEIKACM&_nc_ht=scontent-cpt1-1.xx&oh=00_AYDTSnQH_cpoCmGcOmnm0ISW4Zd_iJcVaFlDiEQZ3fx7mA&oe=66C5B363',
  },
  {
    name: "MOHAMED SHAWKY",
    title: "CTO",
    image: 'https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/454505222_10233305216031432_4141538133584700054_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFLOn2IoPDiqU8xbBjwJV4XqpVL9pTpHPSqlUv2lOkc9CGMhqkGMYocokoWQMgzOtc&_nc_ohc=kYI2JmulFU0Q7kNvgG3nl8a&_nc_ht=scontent-cpt1-1.xx&oh=00_AYCZLTOFrrAbmMc9osu0YhEhGfpDQs-4UKxJ_aL1qklU5A&oe=66C14018',
  },
  {
    name: "ZAAHID",
    title: "COO",
    image: "../src/assets/zaahid.jpg",
  }
];

const AboutFounders: React.FC = () => {
  return (
    <Box sx={{ textAlign: 'center', my: 12 }}>
      <Typography variant="h6" component="h2" color="#FFC107">
        About Founders
      </Typography>
      <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 4 }}>
        We Are Leading International Company In The World
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}>
        {founders.map((founder, index) => (
          <Card key={index} sx={{ width: 345, height: 400, position: 'relative' }}>
            <CardMedia
              component="img"
              alt={founder.name}
              image={founder.image}
              sx={{ height: '100%', objectFit: 'cover' }}
            />
            <CardContent
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: '#fff',
                textAlign: 'left',
              }}
            >
              <Typography variant="h5" component="div">
                {founder.name}
              </Typography>
              <Typography variant="body2" color="inherit">
                {founder.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default AboutFounders;
