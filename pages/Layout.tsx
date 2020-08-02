import Link from "next/link";

export interface Props {
  children: any;
}

const Layout = ({ children }: Props) => (
  <div>
    {/* Header */}
    <div className="grid grid-cols-1 shadow bg-blue-300">
      <Link href="/">
        <div className="flex justify-center">
          <img
            src="/KUSHISCHOOLLOGO.png"
            alt="my image"
            className="w-full sm:w-64"
          />
        </div>
      </Link>
    </div>
    {children}
    {/* Footer */}
    <div className="bg-blue-400 p-2 fixed bottom-0 w-full">copyRights</div>
  </div>
);

export default Layout;
