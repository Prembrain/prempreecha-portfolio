import { useTheme } from './ThemeContext'
import { project } from '../constants'
import { GithubDark, GithubLight, PopupLight, Popupdark, KRNLLabs } from '../assets'
export default function Project() {
  const { theme } = useTheme()

  const popup = theme === 'light' ? Popupdark : PopupLight
  const githubIcon = theme === 'light' ? GithubLight : GithubDark

  return (
    <section
      id="projects"
      className="relative w-full py-[4rem] md:py-[10rem] bg-color-3 dark:bg-n-4"
    >
      <div className="mx-auto max-w-[1280px]  px-6 xl:px-10">
        <p className="h4 uppercase font-rubik text-n-1 mb-4 text-center lg:text-start">my work</p>
        <div className="flex flex-col lg:flex-row justify-around items-center gap-6 lg:gap-0 mb-16">
          <img className="rounded-[25px]" src={KRNLLabs} alt="projectImg" width={450} />
          <div className="flex flex-col max-w-[450px] gap-5 text-center">
            <h4 className="h4 font-rubik uppercase">Kernel Platforms</h4>
            <p className="">
              KRNL Platform is a decentralized application (dApp) designed to simplify on-chain
              registrations for kernel providers, smart contract developers, and dApp creators. It
              connects users’ wallets through an interactive interface, allowing them to register
              and browse kernels, smart contracts, and dApps via blockchain-based registries. KRNL
              uses smart contracts as decentralized registries to store metadata such as OpenAPI
              specs, function return types, and contract details, enabling seamless discovery and
              execution of on-chain services through KRNL nodes.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-2">
              <div className="text-center bg-lime-200 rounded-lg py-1 px-2">
                <p className="text-sm text-lime-600 font-bold">React</p>
              </div>
              <div className="text-center bg-lime-200 rounded-lg py-1 px-2">
                <p className="text-sm text-lime-600 font-bold">Next.js</p>
              </div>
              <div className="text-center bg-cyan-200 rounded-lg py-1 px-2">
                <p className="text-sm text-sky-600 font-bold">Wallet-Connect</p>
              </div>
              <div className="text-center bg-cyan-200 rounded-lg py-1 px-2">
                <p className="text-sm text-sky-600 font-bold">The Graph</p>
              </div>
              <div className="text-center bg-orange-200 rounded-lg py-1 px-2">
                <p className="text-sm text-orange-600 font-bold">Solidity</p>
              </div>
              <div className="text-center bg-orange-200 rounded-lg py-1 px-2">
                <p className="text-sm text-orange-600 font-bold">Node.js</p>
              </div>
              <div className="text-center bg-red-200 rounded-lg py-1 px-2">
                <p className="text-sm text-red-600 font-bold">HeadlessUI</p>
              </div>
              <div className="text-center bg-red-200 rounded-lg py-1 px-2">
                <p className="text-sm text-red-600 font-bold">Vercel</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-8">
              <a
                href="https://app.platform.lat/"
                target="_blank"
                className="flex items-center hover:scale-105 cursor-pointer"
              >
                <h4 className="h4 font-medium tracking-tight">Project Link</h4>
                <img src={popup} alt="popup" width={30} className="p-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1280px]  px-6 xl:px-10">
        <p className="h4 uppercase font-rubik text-n-1 mb-4 text-center lg:text-start">portfolio</p>
        <h2 className="h2 font-rubik font-semibold mb-16 text-center lg:text-start">
          Each project is a unique piece of development🧩
        </h2>
        {project.map((item, index) => {
          if (index % 2 === 0) {
            return (
              <div
                key={item.id}
                className="flex flex-col lg:flex-row justify-around items-center gap-6 lg:gap-0 mb-16"
              >
                <img className="rounded-[25px]" src={item.img} alt="projectImg" width={450} />
                <div className="flex flex-col max-w-[450px] gap-5 text-center">
                  <h4 className="h4 font-rubik uppercase">{item.title}</h4>
                  <p className="">{item.detail}</p>
                  <div className="flex flex-wrap justify-center items-center gap-2">
                    <div className="text-center bg-lime-200 rounded-lg py-1 px-2">
                      <p className="text-sm text-lime-600 font-bold">{item.tech.tech1}</p>
                    </div>
                    <div className="text-center bg-lime-200 rounded-lg py-1 px-2">
                      <p className="text-sm text-lime-600 font-bold">{item.tech.tech2}</p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-8">
                    <a
                      href={item.gitlink}
                      target="_blank"
                      className="flex items-center hover:scale-105 cursor-pointer"
                    >
                      <h4 className="h4 font-medium tracking-tight">{item.git}</h4>
                      <img src={githubIcon} alt="github" width={30} />
                    </a>
                    <a
                      href={item.demolive}
                      target="_blank"
                      className="flex items-center hover:scale-105 cursor-pointer"
                    >
                      <h4 className="h4 font-medium tracking-tight">{item.live}</h4>
                      <img src={popup} alt="popup" width={30} className="p-1" />
                    </a>
                  </div>
                </div>
              </div>
            )
          } else {
            return (
              <div
                key={item.id}
                className="flex flex-col lg:flex-row-reverse justify-around items-center gap-6 lg:gap-0 mb-16"
              >
                <img className="rounded-[25px]" src={item.img} alt="projectImg" width={450} />
                <div className="flex flex-col max-w-[450px] gap-5 text-center">
                  <h4 className="h4 font-rubik uppercase">{item.title}</h4>
                  <p className="">{item.detail}</p>
                  <div className="flex flex-wrap justify-center items-center gap-2">
                    <div className="text-center bg-lime-200 rounded-lg py-1 px-2">
                      <p className="text-sm text-lime-600 font-bold">{item.tech.tech1}</p>
                    </div>
                    <div className="text-center bg-lime-200 rounded-lg py-1 px-2">
                      <p className="text-sm text-lime-600 font-bold">{item.tech.tech2}</p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-8">
                    <a
                      href={item.gitlink}
                      target="_blank"
                      className="flex items-center hover:scale-105 cursor-pointer"
                    >
                      <h4 className="h4 font-medium tracking-tight">{item.git}</h4>
                      <img src={githubIcon} alt="github" width={30} />
                    </a>
                    <a
                      href={item.demolive}
                      target="_blank"
                      className="flex items-center hover:scale-105 cursor-pointer"
                    >
                      <h4 className="h4 font-medium tracking-tight">{item.live}</h4>
                      <img src={popup} alt="popup" width={30} className="p-1 hover:scale-105" />
                    </a>
                  </div>
                </div>
              </div>
            )
          }
        })}
      </div>
    </section>
  )
}
