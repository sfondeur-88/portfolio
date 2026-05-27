import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

export const useNavigateToSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.slice(1); // strip the leading '#'
      const el = document.getElementById(sectionId);
      const scrollContainer = document.getElementById('scroll-container');
      if (el && scrollContainer) {
        const SCROLL_OFFSET = 24;
        const targetTop =
          el.getBoundingClientRect().top -
          scrollContainer.getBoundingClientRect().top +
          scrollContainer.scrollTop -
          SCROLL_OFFSET;
        scrollContainer.scrollTo({ top: targetTop, behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  const goToSection = (path: string, sectionId: string) => {
    navigate(`${path}#${sectionId}`);
  };

  return { goToSection };
};
