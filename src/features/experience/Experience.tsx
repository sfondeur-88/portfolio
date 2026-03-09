import { useEffect } from "react";

const Experience = () => {
  useEffect(() => {
    document.title = "Experience | Shane's Dev Portfolio";
  }, []);

  // TODO: Shane - thinking this could be a landing page for my projects/experience with a list of big cards showcasing each company?
  // Then upon clicking a company card, it routes us to a sub-route for their page?

  return (
    <div>Experience</div>
  );
};

export default Experience;