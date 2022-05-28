import logo from "../assets/logo.svg"
import facebookIcon from "../assets/icon-facebook.svg"
import twitterIcon from "../assets/icon-twitter.svg"
import pinterestIcon from "../assets/icon-pinterest.svg"
import instagramIcon from "../assets/icon-instagram.svg"

const Footer = () => {
  return (
    <div className="bg-black">
        <div className="container max-w-6xl py-10 mx-auto">
            <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
                {/* Menu & Logo Container */}
                <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
                    <div className="h-8">
                        <img src={logo} className="w-44 md:ml-3" alt="Loopstudios Logo" />
                    </div>
                    <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
                        <div className="h-10 group">
                            <a href="/">About</a>
                            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                        </div>

                        <div className="h-10 group">
                            <a href="/">Carreers</a>
                            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                        </div>

                        <div className="h-10 group">
                            <a href="/">Events</a>
                            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                        </div>

                        <div className="h-10 group">
                            <a href="/">Products</a>
                            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                        </div>

                        <div className="h-10 group">
                            <a href="/">Support</a>
                            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                        </div>
                    </div>
                </div>

                {/* Social & Copyright Container */}
                <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
                    <div className="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
                        <div className="h-8 group">
                            <a href="/">
                                <img src={facebookIcon} className="h-6" alt="Social Icon" />
                            </a>
                        </div>

                        <div className="h-8 group">
                            <a href="/">
                                <img src={twitterIcon} className="h-6" alt="Social Icon" />
                            </a>
                        </div>

                        <div className="h-8 group">
                            <a href="/">
                                <img src={pinterestIcon} className="h-6" alt="Social Icon" />
                            </a>
                        </div>

                        <div className="h-8 group">
                            <a href="/">
                                <img src={instagramIcon} className="h-6" alt="Social Icon" />
                            </a>
                        </div>
                    </div>

                    <div className="font-bold">
                        &copy; 2022 Loopstudios. All Rights Reserved.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer