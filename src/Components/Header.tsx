import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-black text-white">
      <div className="text-lg font-bold">Vercel</div>
      <nav>
        <ul className="flex space-x-6">
          <li>Products</li>
          <li>Solutions</li>
          <li>Resources</li>
          <li>Enterprise</li>
          <li>Docs</li>
          <li>Pricing</li>
        </ul>
      </nav>
      <div className="flex space-x-4">
        <button>Contact</button>
        <button className="bg-gray-700 px-4 py-2 rounded">Dashboard</button>
      </div>
    </header>
  );
}

export default Header;
