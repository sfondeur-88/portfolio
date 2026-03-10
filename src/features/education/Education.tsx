import { useEffect } from 'react';

const Education = () => {
  useEffect(() => {
    document.title = "Education | Shane's Dev Portfolio";
  }, []);

  return <div>Education</div>;
};

export default Education;
