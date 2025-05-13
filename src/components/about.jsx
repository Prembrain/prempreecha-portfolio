import { Laptop, Person, Text } from '../assets'

export default function About() {
  return (
    <section id="about" className="relative w-full py-[4rem] md:py-[10rem] dark:bg-color-5">
      <div className="flex justify-center items-center mx-auto max-w-[1280px]">
        <div className="flex flex-col lg:flex-row justify-around items-center w-full px-6 gap-4">
          <div className="relative sm:w-[500px] sm:h-[400px] py-4">
            <img
              className="w-80% h-auto sm:w-[450px] sm:h-[350px] rounded-[25px]"
              src={Laptop}
              alt="laptop"
            />
            <img
              className="absolute hidden sm:block bottom-[0.5rem] right-0 w-[12rem] bg-n-3 rounded-full animate-spin-360"
              src={Text}
              alt="text"
            />
            <img
              className="absolute hidden sm:block z-10 bottom-[5.1rem] right-[4rem] w-[60px] h-[60px]"
              src={Person}
              alt="person"
            />
          </div>
          <div className="flex flex-col justify-center gap-4 max-w-[500px]">
            <h4 className="h4 uppercase font-rubik text-n-1">about me</h4>
            <h3 className="h3 font-rubik">
              Full-Stack Developer
              <br />
              based in thailand📍
            </h3>
            <p className="font-roboto">
              I&apos;m a Blockchain Engineer and Full-Stack Developer with hands-on experience in
              both Web2 and Web3. I&apos;m passionate about delivering smooth user experiences
              backed by solid technical foundations.
            </p>
            <p className="font-roboto">
              In Web2, I build responsive and scalable applications using React, Next.js,
              TypeScript, Node.js, and Tailwind CSS. On the backend, I handle API integrations,
              routing, server-side rendering (SSR), and work with databases like PostgreSQL and
              MongoDB to deliver complete, data-driven solutions.
            </p>
            <p className="font-roboto">
              In Web3, I develop applications that connect to blockchain networks and smart
              contracts using Wagmi, Ethers.js, and The Graph. I have experience contributing to NFT
              platforms and decentralized applications (dApps), bridging blockchain technology with
              modern web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
