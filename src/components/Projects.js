import { Box, Typography, Grid, Paper } from "@mui/material";
function Projects() {
  const projects = [
    { name: "Project Alpha", description: "AI-powered analytics platform." },
    { name: "Project Beta", description: "Cross-platform mobile application." },
    { name: "Project Gamma", description: "E-commerce website redesign." }
  ];
  return (
    <Box className="main-section" id="projects">
      <Typography className="section-title">Our Projects</Typography>
      <Grid container spacing={3}>
        {projects.map((proj, idx) => (
          <Grid item xs={12} md={4} key={idx}>
            <Paper elevation={2} sx={{ p: 2 }}>
              <Typography variant="h6">{proj.name}</Typography>
              <Typography color="text.secondary">{proj.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
export default Projects;
