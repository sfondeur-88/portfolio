import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

export const useNavigateToSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.slice(1); // strip the leading '#'
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  const goToSection = (path: string, sectionId: string) => {
    navigate(`${path}#${sectionId}`);
  };

  return { goToSection };
};
