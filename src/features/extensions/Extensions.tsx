import ExtensionsContent from '@/components/layout/app-sidebar/ExtensionsContent';
import { ROUTE_PATHS } from '@/routes/paths';
import theme from '@/theme';
import { useMediaQuery } from '@mui/material';
import { useEffect } from 'react';
import { Navigate } from 'react-router';

const Extensions = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'), { noSsr: true });

  useEffect(() => {
    document.title = "Extensions | Shane's Dev Portfolio";
  }, []);

  if (!isMobile) {
    return <Navigate to={ROUTE_PATHS.WELCOME} replace />;
  }

  return <ExtensionsContent />;
};

export default Extensions;
