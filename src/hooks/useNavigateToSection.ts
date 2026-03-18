import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router';

export const useNavigateToSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pendingSectionId = useRef<string | null>(null);

  useEffect(() => {
    if (pendingSectionId.current) {
      const el = document.getElementById(pendingSectionId.current);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        pendingSectionId.current = null;
      }
    }
  }, [location.pathname]);

  const goToSection = (path: string, sectionId: string, currentPath: string) => {
    if (currentPath === path) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      pendingSectionId.current = sectionId;
      navigate(path);
    }
  };

  return { goToSection };
};
