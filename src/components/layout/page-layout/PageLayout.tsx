import { Outlet } from 'react-router';

const PageLayout = () => {
  // 📄 Explorer — toggles sidebar
  // 🔍 Search — command palette / jump to section
  // 🐙 GitHub — external link
  // 👤 LinkedIn — external link
  // 🎮 Extensions — easter egg hobbies panel

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
