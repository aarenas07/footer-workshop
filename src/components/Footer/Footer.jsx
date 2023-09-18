import "./style.scss"
import { FaFacebookSquare, FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa"

export const Footer = () => {
    return (
        <>
            <div className="footerContainer">
                <div className="companyInfoContainer">
                    <div className="companyNameContainer">
                        <span className="companyName">
                            Loopstudios
                        </span>
                        <div className="linksContainer">
                            <div>
                                About
                            </div>
                            <div>
                                Careers
                            </div>
                            <div>
                                Events
                            </div>
                            <div>
                                Products
                            </div>
                            <div>
                                Support
                            </div>
                        </div>
                    </div>

                </div>

                <div className="otherInfoContainer">
                    <div className="redesContainer">
                        <div>
                            <FaFacebookSquare />
                        </div>
                        <div>
                            <FaTwitter />
                        </div>
                        <div>
                            <FaPinterest />
                        </div>
                        <div>
                            <FaInstagram />
                        </div>
                    </div>
                    <div className="copyrigthContainer">
                        <span>
                            © 2021 Loopstudios. All rights reserved.
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
