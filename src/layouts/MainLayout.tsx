import { Header } from '@components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from '@components/Footer/Footer';
import { SideBar } from '@components/SideBar/SideBar';
import { LayoutContainer, MainContent } from './MainLayout.styles';

export default function MainLayout() {
  return (
    <LayoutContainer>
      <Header/>
      <MainContent>
        <Outlet />  {/* Child routes render here */}
        <SideBar/>
      </MainContent>
      <Footer/>
    </LayoutContainer>
  );
}