interface SideNavProps {
  setActiveContent: Function;
}

const SideNav = ({ setActiveContent }: SideNavProps) => {

  const handleNavClick = (content: string) => {
    setActiveContent(content);
  };

  return (
    <nav className="w-1/6 bg-gray-800 p-4 text-white">
      <ul>
        <li className="mb-4">
          <a className="block hover:text-blue-500"
             onClick={() => handleNavClick("Basics")}
          >
            Basics
          </a>
        </li>
        <li className="mb-4">
          <a className="block hover:text-blue-500"
             onClick={() => handleNavClick("Connect")}
          >
            Connect
          </a>
        </li>
        <li className="mb-4">
          <a href="#" className="block hover:text-blue-500">Documents</a>
        </li>
        <li className="mb-4">
          <a href="#" className="block hover:text-blue-500">Conversion</a>
        </li>
        <li>
          <a href="#" className="block hover:text-blue-500">Funding</a>
        </li>
      </ul>
    </nav>
  );
}

export default SideNav;