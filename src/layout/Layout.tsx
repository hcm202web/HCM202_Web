import React from 'react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-custom-blue-bg">
    <Header />
    <main className="flex-grow">{children}</main>
  </div>
);

export default Layout;
