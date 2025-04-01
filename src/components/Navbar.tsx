'use client';

import { FC } from 'react';
import { Settings, Bell } from 'lucide-react';
import Image from 'next/image';
import montserratAlternates from './fonts';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: FC = () => {
  const pathname = usePathname();
  const isLoginPage = pathname === '/';

  return (
    <nav className={`${montserratAlternates.className} bg-[#FAF9F6] shadow-md px-6 py-3 flex justify-between items-center w-full border-b-2 border-blue-300`}>
      <Link href="/dashboard">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <span className="text-lg font-semibold text-gray-800">TentLoom</span>
        </div>
      </Link>
      
      {!isLoginPage && (
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full bg-blue-300 hover:bg-blue-400">
            <Bell className="w-5 h-5 " />
          </button>
          <Link href="/system-settings">
            <button className="flex cursor-pointer items-center gap-2 px-4 py-2 border border-blue-400 rounded-full text-gray-700 hover:bg-gray-100">
              <Settings className="w-5 h-5 text-gray-600" />
              <span className="text-sm">Settings</span>
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
