import { Outlet } from 'react-router';

const PageLayout = () => {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
      <nav style={{ flex: '0 0 20%', backgroundColor: 'tomato' }}>Left Nav</nav>
      <div style={{ flex: '0 0 80%', backgroundColor: 'slateblue' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default PageLayout;
