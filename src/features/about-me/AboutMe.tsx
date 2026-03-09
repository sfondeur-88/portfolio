// import Masonry from '@mui/lab/Masonry'; // TODO:Shane - Probably remove mui lab package?
import { ImageList, ImageListItem, Stack } from "@mui/material";
import { useEffect } from "react";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  }
];

const AboutMe = () => {
  useEffect(() => {
    document.title = "About Me | Shane's Dev Portfolio";
  }, []);

  // TODO:Shane
  // Each paragraph should be its own "section".
  // The left can be the text, while the right could be associated images to tell the story.
  // Could alternate these if we want each section? backgroundColor->#082844 for every other section
  // Since we'll be scrolling, we could do some paralax scroll effects? 
  // Overall should be styled similar to vs code, like having split windows open
  // ex: Left is the code editor, right window is the images like a README.md file in preview mode.

  return (
    <Stack>
      <section>
        <div>
          <h2>How I Got Into Coding</h2>
          <p>My journey started with...</p>
        </div>
        <div>
          <ImageList
            sx={{ width: 500, height: 450 }}
            variant="quilted"
            cols={4}
            rowHeight={121}
          >
            {itemData.map((item) => (
              <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </section>
    </Stack>
    // <Grid
    //   container
    //   spacing={3}
    // >
    //   {/* Left-grid */}
    //   <Grid size={6} sx={{ outline: '1px solid #eee ' }}>
    //     <Typography variant="h3">About Me Title</Typography>
    //     <Stack gap={5}>
    //       <Typography>
    //         Hey there — I’m Shane, a front-end developer with a passion for turning designs into clean, interactive, and pixel-perfect user experiences. My journey into web development started way back during the Geocities era, when HTML felt like magic and building personal sites for my favorite games was the best thing ever. That early spark of creativity never left — it just evolved.
    //       </Typography>
    //       <Typography>
    //         One moment that really stuck with me growing up was watching a documentary on how Nintendo 64 games like GoldenEye and Donkey Kong 64 were made. I was completely fascinated — not just by the games themselves, but by the vibe: the creative energy, the personalized desk setups, and people genuinely loving what they were building. That image stuck with me for years and ultimately helped guide me toward a career in software.
    //       </Typography>
    //       <Typography>
    //         In school, I realized how much I enjoyed this work through hands-on projects — especially one where we had to recreate a NASA webpage from a screenshot. I ended up scoring over 100% by obsessing over the layout and details, and more importantly, I had an awesome time doing it. That cemented it: translating a design into a fully functional webpage felt like something I could do for life.
    //       </Typography>
    //       <Typography>
    //         These days, I focus on building modern, responsive UIs using React, with a special interest in advanced CSS, meaningful animation, and component-driven design. I love projects where I get to polish interactions and make things feel right — not just look right.
    //       </Typography>
    //       <Typography>
    //         I’m currently expanding my knowledge of the React ecosystem by diving into React Native (mobile is just plain fun to work on), and I’ve got GraphQL next on my learning roadmap as I deepen my full-stack capabilities. Whether it’s design fidelity, code quality, or just making something feel intuitive, I’m always looking to grow and create things people actually enjoy using.
    //       </Typography>
    //       <Typography>
    //         Thanks for stopping by — and if you’ve got a project or idea you’re excited about, I’d love to connect.
    //       </Typography>
    //     </Stack>
    //   </Grid>

    //   {/* Right-grid */}
    //   <Grid size={6} sx={{ outline: '1px solid #eee ' }}>
    //     <Typography variant="h3">Something else Title</Typography>
    //     <Typography>More stuff.</Typography>
    //   </Grid>
    // </Grid>
  );
};

export default AboutMe;