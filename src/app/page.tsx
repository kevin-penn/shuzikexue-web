import Image from "next/image";
import logoWeb from '../../public/logo-web.png'
import logoCircle from '../../public/logo-circle.png'

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="flex w-full max-w-[1110px] px-4 flex-col justify-center content-center">
        <header className="flex item-center my-2"> 
          <Image src={logoWeb} priority placeholder="blur" quality={10} alt="数字科学网" className="hidden h-10 w-auto sm:block rounded-lg" />
          <Image src={logoCircle} priority placeholder="blur" quality={10} alt="数字科学网" className="h-10 w-auto sm:hidden rounded-lg" />
          <nav className="overflow-x-auto pb-2">
            <ul className="flex space-x-4 min-w-max items-center justify-center mx-auto px-3 py-2 max-w-7xl ml-4 font-bold">
              <li>
                <a className="nav-link">导航</a>
              </li>
              <li>
                <a className="nav-link">知识百科</a>
              </li>
              <li>
                <a className="nav-link">数据雷达</a>
              </li>
              <li>
                <a className="nav-link">资源分享</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <div className="my-2 p-2 border border-solid rounded-lg border-orange-300">
            <div className="font-bold my-2">常用网站</div>
            <div>
              <a href="https://aws.amazon.com/" target="_blank" className="website-link">Amazon Web Service</a>
              <a href="https://www.volcengine.com/" target="_blank" className="website-link">火山引擎</a>
              <a href="https://deepnote.com/" target="_blank" className="website-link">Deepnote</a>
              <a href="https://paperswithcode.com/" target="_blank" className="website-link">Papers with Code</a>
              <a href="https://www.shodan.io/" target="_blank" className="website-link">Shodan</a>
            </div>
          </div>
          <div className="my-2 p-2 border border-solid rounded-lg border-orange-300">
            <div className="font-bold my-2">网盘搜索</div>
            <div>
              <a href="https://www.xuebapan.com/" target="_blank" className="website-link">学霸盘</a>
              <a href="https://miaosou.fun/" target="_blank" className="website-link">秒搜</a>
            </div>
          </div>
          <div className="my-2 p-2 border border-solid rounded-lg border-orange-300">
            <div className="font-bold my-2">娱乐</div>
            <div>
              <a href="https://www.youtube.com/" target="_blank" className="website-link">Youtube</a>
              <a href="https://www.bilibili.com/" target="_blank" className="website-link">哔哩哔哩</a>
              <a href="https://v.qq.com/" target="_blank" className="website-link">腾讯视频</a>
            </div>
          </div>
          <div className="my-2 p-2 border border-solid rounded-lg border-orange-300">
            <div className="font-bold my-2">开源项目</div>
            <div>
              <a href="https://free-for.dev/" target="_blank" className="website-link">Free for Developers</a>
              <a href="https://nextjs.org/" target="_blank" className="website-link">Next.js</a>
              <a href="https://github.com/akfamily/akshare" target="_blank" className="website-link">AKShare</a>
            </div>
          </div>
          <div className="my-2 p-2 border border-solid rounded-lg border-orange-300">
            <div className="font-bold my-2">数据探索</div>
            <div>
              <a href="https://data.stats.gov.cn//" target="_blank" className="website-link">国家统计局数据</a>
              <a href="https://www.miit.gov.cn/" target="_blank" className="website-link">工信部</a>
              <a href="https://www.gsxt.gov.cn/" target="_blank" className="website-link">国家企业信用信息公示系统</a>
            </div>
          </div>
        </main>
        <footer className="items-center justify-center mt-4">
          <div className="text-sm text-stone-500">
            Copyright &copy; 2025 数字科学网 版权所有.
          </div>
        </footer>
      </div>
    </div>
  );
}
