import { useEffect } from "react";

const Resume = () => {
  useEffect(() => {
    document.title = "Resume | Shane's Dev Portfolio";
  }, []);

  return (
    <div>My Resume</div>
  );
};

export default Resume;