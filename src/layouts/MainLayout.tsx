import { Header } from '@components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from '@components/Footer/Footer';
import { SideBar } from '@components/SideBar/SideBar';

export default function MainLayout() {
  return (
    <div>
      <Header/>
      <main>
        <Outlet />  {/* Child routes render here */}
        <SideBar/>
      </main>
      <Footer/>
    </div>
  );
}