import { Box, Typography, Avatar, Grid, Paper } from "@mui/material";
const team = [
  { name: "Alex Smith", role: "CEO", img: "/img/alex.jpg" },
  { name: "Jamie Lee", role: "CTO", img: "/img/jamie.jpg" },
  { name: "Taylor Kim", role: "Lead Designer", img: "/img/taylor.jpg" }
];
function Team() {
  return (
    <Box className="main-section" id="team">
      <Typography className="section-title">Our Team</Typography>
      <Grid container spacing={3} justifyContent="center">
        {team.map((member, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Paper elevation={1} sx={{ p: 3, textAlign: 'center' }}>
              <Avatar sx={{ width: 72, height: 72, mx: 'auto', mb: 2 }} src={member.img} />
              <Typography variant="h6">{member.name}</Typography>
              <Typography color="text.secondary">{member.role}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
export default Team;
