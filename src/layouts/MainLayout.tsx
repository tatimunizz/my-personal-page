import ThemeToggle from '@components/ThemeToggle/ThemeToggle';
import { Header } from '@components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from '@components/Footer/Footer';

export default function MainLayout() {
  return (
    <div>
      <Header/>
      <main>
        <ThemeToggle/>
        <Outlet />  {/* Child routes render here */}
      </main>
      <Footer/>
    </div>
  );
}