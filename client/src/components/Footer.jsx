import React from 'react'

// import InstagramIcon from './assets/InstagramIcon.png'
// import FacebookIcon from './assets/FacebookIcon.png'
// import TwitterIcon from './assets/TwitterIcon.png'


export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-locations" id="footer-locations">
        <p>Explore</p>
        <div id="footer-socials">
          <a href="https://www.instagram.com/"><img className='socialLogo' src="https://i.imgur.com/90TFgg0.png" alt="logo" /></a>
          <a href="https://www.facebook.com/"><img className='socialLogo' src="https://i.imgur.com/20twqzY.png" alt="logo" /></a>
          <a href="https://www.twitter.com/"><img className='socialLogo' src="https://i.imgur.com/Equc306.jpg" alt="logo" /></a>
        </div>

      </div>
      <div className="footer-column" id="footer-connect">
      </div>
      <div className="footer-column" id="footer-connect">
        <div id='footer-contact-link'>
          <p>Connect</p>
          <div id="icon-contact-email">
            <a href="mailto:info@harbour.com">info@harbour.com</a></div>
          <div id="icon-contact-tele">
            <a href="tel:123-456-789">123-456-789</a>
          </div>
        </div>
      </div>
    </div>
  )
}