import Header from '@/components/layout/Header';

export interface LayoutProps {
  children: React.ReactNode;
}

/**
 *@description - This is the root layout component. This Layout contains the TopBar and Footer components.
 *@returns - The main Layout
 */

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='bg-gray-300 min-h-screen overflow-x-hidden relative'>
      <Header />
      <div className=''>{children}</div>
    </div>
  );
};

export default Layout;
