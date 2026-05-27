import MobileBottomNav from '../mobile-bottom-nav/MobileBottomNav';
import AppSidebar from '../app-sidebar/AppSidebar';
import CodeEditor from '../code-editor/CodeEditor';
import { useMediaQuery } from '@mui/material';
import theme from '@/theme';

const PageLayout = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, minHeight: 0, minWidth: 0, display: 'flex', flexDirection: 'row' }}>
        {!isMobile && <AppSidebar />}
        <CodeEditor />
      </div>
      {isMobile && <MobileBottomNav />}
    </div>
  );
};

export default PageLayout;
