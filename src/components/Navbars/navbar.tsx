import logo from "../../assets/images/KedaiProgrammer.png";

const NavigationBar = () => {
  return (
    <div className="navbar bg-neutral px-4 sm:px-6 md:px-10 lg:px-20 sticky top-0 z-50">
      <div className="flex-1">
        {/* Avatar */}
        <div className="avatar">
          <div className="w-10 rounded-full items-center">
            <img alt="Logo" src={logo} />
          </div>
        </div>
        {/* Brand Name */}
        <a href="/" className="btn btn-ghost normal-case text-xl">
          Kedai Programmer
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#dashboard">Dashboard</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#partner">Partner</a>
          </li>
          <li>
            <a href="#contactUs">Contact Us</a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-index"
          >
            <li>
              <a href="#dashboard">Dashboard</a>
            </li>
            <li>
              <a href="#framework">Project</a>
            </li>
            <li>
              <a href="#project">Project</a>
            </li>
            <li>
              <a href="#partner">Partner</a>
            </li>
            <li>
              <a href="#contactUs">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
