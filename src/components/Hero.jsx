import NavBar from "./NavBar"
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa"
import mypic from "/mypic.jpg"
import cv from "/My_CV.pdf"


const Hero= () => {
    return(
        <div className="relative overflow-hidden min-h-[550px] sm:min-h-[600px] flex flex-col 
        items-center">
            <div className="md:h-[550px] h-[500px] w-[450px] bg-gradient-to-r absolute
             from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] transform rotate-45 z-0 right-2 top-28
             rounded-3xl"
            ></div>
            <NavBar/>
            <main
                id="home"
                className="flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4
                md:pb-24 md:pt-32 pt-24 mt-14 md:mt-0 z-10">
                    <section
                        className="flex-1 mr-28 md:text-left mt-10 md:mt-0 relative"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        <div className="absolute -z-10 w-60 h-60 bg-[#cd3cf5] rounded-full blur-3xl
                        opacity-50 -top-5 -left-12"></div>
                        <header>
                            <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                                Santiago Ruiz Diaz
                            </h1>
                            <h2 className="text-xl sm:text-4xl md:text-2xl font-bold text-[#3e0f4a]
                            md:text-[#c744ec] mb-2">
                                Fullstack Developer
                            </h2>
                        </header>
                        <p className="text-base sm:text-lg md:text-lg text-gray-200 mb-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Reiciendis reprehenderit, in nesciunt beatae officia ea facilis vero!
                                Voluptatibus sed, nulla, nisi odio voluptates illo, praesentium quod nostrum exercitationem in esse.
                        </p>
                        <div className="flex items-center space-x-4 mb-6">
                            <a href={import.meta.env.VITE_GITHUB_URL}>
                                <FaGithub alt="GitHub" color="#c744ec" className="w-11 h-11"/>
                            </a>
                            <a href={import.meta.env.VITE_LINKEDIN_URL}>
                                <FaLinkedin alt="LinkedIn" color="#c744ec" className="w-11 h-11"/>
                            </a>
                            <a href={import.meta.env.VITE_INSTAGRAM_URL}>
                                <FaInstagram alt="Instagram" color="#c744ec" className="w-11 h-11"/>
                            </a>
                        </div>
                        <a href={cv} download>
                            <button className="inline-flex text-white border-2 py-2 px-6 focus:outline-none
                            hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg">
                                Download CV
                            </button>
                        </a>
                    </section>
                    <img
                        data-aos='fade-up'
                        data-aos-delay='500'
                        src={mypic}
                        alt="My Pic"
                        className="relative z-10 rounded-full max-h-full shadow-2xl transform
                        transition-transform duration-500 ease-in-out hover:scale-110"
                    />
                </main>
        </div>
    )
}

export default Hero