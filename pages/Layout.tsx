export interface LayoutProps {
  children: React.ReactNode;
}

/**
 *@description - This is the root layout component. This Layout contains the TopBar and Footer components.
 *@returns - The main Layout
 */

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='bg-[#F8F4F2] min-h-screen overflow-x-hidden relative'>
      <div className=''>{children}</div>
    </div>
  );
};

export default Layout;
