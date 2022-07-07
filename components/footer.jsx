import InstagramIcon from "@mui/icons-material/Instagram"
import GitHubIcon from "@mui/icons-material/GitHub"
import TwitterIcon from "@mui/icons-material/Twitter"
import LinkedInIcon from "@mui/icons-material/LinkedIn"

const Footer = () => {
  return (
    <div className=" w-screen text-center text-black dark:text-white font-bold">
      <div className="flex justify-center space-x-8 mx-3 mb-2 text-black dark:text-white">
        <a href="https://www.instagram.com/hey_jonuel/"><InstagramIcon className="cursor-pointer lg:text-4xl"/></a>
        <a href="https://github.com/Emmanueluzoezie"><GitHubIcon className="cursor-pointer lg:text-4xl"/></a>
        <a href="https://twitter.com/Emmy_uzoezie"><TwitterIcon className="cursor-pointer lg:text-4xl"/></a>
        <a href="https://www.linkedin.com/in/emmanuel-j-uzoezie-a40608176" ><LinkedInIcon className="cursor-pointer lg:text-4xl"/></a>
    </div>
    <div className="flex justify-center items-center mt-4 pb-2 md:pb-4 md:text-2xl">
      <h3 >created by Emmanuel uzoezie </h3>
      <div className="rounded-full border flex items-center justify-center w-[20px] h-[20px] md:w-[30px] md:h-[30px]  dark:border-white border-black mx-2"><p  className="">c</p></div> 
      <h3>2022 Jonuel dev</h3>
    </div>
    </div>
  )
}

export default Footer