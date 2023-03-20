import React from 'react';
import '../Styles/Components/Footer.scss';

function Footer() {

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'auto'});
  
	return (
        <div className='footer'>
            <div className="footer_backToTop" onClick={scrollToTop}>
                <p>Back to top</p>
            </div>
            <div className="footer_service">
                <div className="footer_container">
                    <div className="footer_all">
                        <div className="footer_title">Get To Know Us</div>
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Press Releases</p>
                        <p>Amazon Science</p>
                    </div>

                    <div className="footer_all">
                        <div className="footer_title">Connect with Us</div>
                        <p>Facebook</p>
                        <p>Twitter</p>
                        <p>Instagram</p>
                    </div>

                    <div className="footer_all">
                        <div className="footer_title">Make Money with Us</div>
                        <p>Sell on Amazon</p>
                        <p>Sell on Amazon Accelerator</p>
                        <p>Protect and Build Your Brand</p>
                        <p>Become an Affiliate</p>
                        <p>Fulfilment by Amazon</p>
                        <p>Advertise Your Products</p>
                        <p>Amazon Pay on Merchants</p>
                    </div>

                    <div className="footer_all">
                        <div className="footer_title">Let Us Help You</div>
                        <p>COVID-19 and Amazon</p>
                        <p>Your Account</p>
                        <p>Returns Center</p>
                        <p>100% Purchase Protection</p>
                        <p>Amazon App Download</p>
                        <p>Help</p>
                    </div>
                </div>
            </div>
        </div>
	);
}

export default Footer;