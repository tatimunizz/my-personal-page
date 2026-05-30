import ThemeToggle from '@components/ThemeToggle/ThemeToggle';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div>
      <header>
        <h2>My App</h2>
        <ThemeToggle/>
      </header>
      <main>
        <Outlet />  {/* Child routes render here */}
      </main>
      <footer>© 2026</footer>
    </div>
  );
}