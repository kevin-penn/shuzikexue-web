import Image from "next/image";
import logoWeb from '../../public/logo-web.png'

export default function Home() {
  return (
    <div className="grid justify-center">
      <header className="flex w-[1200px] my-2"> 
      <Image src={logoWeb} alt="数字科学网" className="h-12 w-auto" />
        <nav>
          <ul className="flex items-center justify-center gap-x-8 mx-auto px-4 py-3 max-w-7xl ml-12 font-bold">
            <li>
              <a className="hover:bg-red-50">长风导航</a>
            </li>
            <li>
              <a>数字百科</a>
            </li>
            <li>
              <a>数据岛</a>
            </li>
            <li>
              <a>共享资源</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="my-2 p-2 border-2 border-solid rounded-lg">
          <div className="font-bold my-2">常用网站</div>
          <div>
            <a href="https://aws.amazon.com/" target="_blank" className="website-link">Amazon Web Service</a>
            <a href="https://www.volcengine.com/" target="_blank" className="website-link">火山引擎</a>
          </div>
        </div>
      </main>
      <footer className="items-center justify-center">
        <div>
          Copyright © 2025 数字科学网 版权所有.
        </div>
      </footer>
    </div>
  );
}
