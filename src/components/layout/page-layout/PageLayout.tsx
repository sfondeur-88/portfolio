import AppSidebar from '../app-sidebar/AppSidebar';
import CodeEditor from '../code-editor/CodeEditor';

const PageLayout = () => {
  // TODO:Shane - scrollbar (CodeEditor.tsx)
  // scrollBehavior: 'smooth',
  // '::-webkit-scrollbar': {
  //   width: '16px',
  // },
  // '::-webkit-scrollbar-track': {
  //   backgroundColor: '#222222',
  // },
  // '::-webkit-scrollbar-thumb': {
  //   backgroundColor: '#444444',
  //   borderRadius: '2px',
  //   cursor: 'pointer',

  //   '&:hover': {
  //     backgroundColor: '#9A9A9A',
  //   },
  // },

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
      <AppSidebar />
      <CodeEditor />
    </div>
  );
};

export default PageLayout;
