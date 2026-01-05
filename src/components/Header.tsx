
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.png"
const Header = () => {
  // const { logout } = useAuth();

  // const handleLogout = () => {
  //   logout();
  // };

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            {/* <div className="w-10 h-10 bg-gradient-to-r from-blueberry-400 to-strawberry-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blueberry-600 to-strawberry-600 bg-clip-text text-transparent">
              Blizz
            </span> */}
            <img src={logo} alt="" className="h-12 w-full" />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blueberry-600 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blueberry-600 transition-colors"
            >
              About
            </Link>
            <Link
              to="/products"
              className="text-gray-700 hover:text-blueberry-600 transition-colors"
            >
              Products
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blueberry-600 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* <Button
            onClick={handleLogout}
            variant="outline"
            className="border-blueberry-200 text-blueberry-600 hover:bg-blueberry-50"
          >
            Logout
          </Button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
