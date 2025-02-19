'use client'; // 确保组件在客户端运行

import Link from 'next/link';
import Image from "next/image";
import { usePathname } from 'next/navigation'; // 获取当前路径
import logoWeb from '../../public/logo-web.png';  // 新增图片导入
import logoCircle from '../../public/logo-circle.png';  // 新增图片导入

const NavBar = () => {
  const pathname = usePathname(); // 获取当前路由路径

  // 导航项配置
  const navItems = [
    { name: '首页', href: '/' },
    { name: '百科', href: '/baike' },
    { name: '数据', href: '/data' },
    { name: '分享', href: '/share' },
  ];

  return (
    <nav className="overflow-x-auto pb-2 flex items-center w-full max-w-[1250px]">
      <div className="flex items-center">
        <Image 
          src={logoWeb} 
          priority 
          quality={80}
          alt="数字科学网" 
          className="hidden h-8 w-auto sm:block rounded-lg transition-opacity duration-300 mr-6"
        />
        <Image 
          src={logoCircle} 
          priority 
          quality={80}
          alt="数字科学网" 
          className="h-8 w-auto sm:hidden rounded-lg mr-6"
        />
      </div>

      <ul className="flex space-x-4 min-w-max items-center justify-center">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`nav-link ${pathname === item.href ? 'text-orange-500' : 'text-gray-900'}`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;