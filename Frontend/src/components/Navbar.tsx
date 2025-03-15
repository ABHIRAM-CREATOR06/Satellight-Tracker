
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  
  const closeDropdown = () => setIsOpen(false);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-blur border-b border-white/10 px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-2">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="flex items-center px-4 py-2 text-white rounded-md hover:bg-white/10 transition-colors duration-300"
              aria-label="Toggle Menu"
            >
              Menu <ChevronDown size={16} className={`ml-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 glass-panel rounded-md overflow-hidden animate-fade-in">
                <div className="py-1">
                  <Link 
                    to="/instructions" 
                    className="block px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors duration-300"
                    onClick={closeDropdown}
                  >
                    Instructions
                  </Link>
                  <Link 
                    to="/history" 
                    className="block px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors duration-300"
                    onClick={closeDropdown}
                  >
                    History
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 top-16 z-40 glass-blur animate-fade-in">
            <div className="flex flex-col items-center justify-center h-full space-y-6">
              <Link 
                to="/instructions" 
                className="text-xl font-medium text-white hover:text-futuristic-blue transition-colors duration-300"
                onClick={closeMobileMenu}
              >
                Instructions
              </Link>
              <Link 
                to="/history" 
                className="text-xl font-medium text-white hover:text-futuristic-blue transition-colors duration-300"
                onClick={closeMobileMenu}
              >
                History
              </Link>
              <Link 
                to="/team" 
                className="text-xl font-medium text-white hover:text-futuristic-blue transition-colors duration-300"
                onClick={closeMobileMenu}
              >
                Team
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
