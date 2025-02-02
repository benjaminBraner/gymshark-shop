import "../styles/components/Footer.css"


export const Footer = () => {
  return (
	<div className='footer__container' id="contact">
	<div className='footer__links'>
		<div className='footer__link--wrapper'>
			<div className='footer__link--item'>
				<h2>About Us</h2>
				<a href='/'>How it works</a>
				<a href='/'>Testimonials</a>
				<a href='/'>Careers</a>
				<a href='/'>Investments</a>
				<a href='/'>Terms of Services</a>
			</div>
			<div className='footer__link--item'>
				<h2>Contact Us</h2>
				<a href='/'>Contact</a>
				<a href='/'>Support</a>
				<a href='/'>Destinations</a>
				<a href='/'>Sponsorships</a>
			</div>
		</div>
		<div className='footer__link--wrapper'>
			<div className='footer__link--item'>
				<h2>Videos</h2>
				<a href="/">Submit Videos</a>
				<a href="/">Ambassadors</a>
				<a href="/">Agency</a>
				<a href="/">Influencer</a>
			</div>
			<div className='footer__link--item'>
				<h2>Social Media</h2>
				<a href='/'>Instagram</a>
				<a href='/'>Facebook</a>
				<a href='/'>Youtube</a>
				<a href='/'>Twitter</a>
			</div>
		</div>
	</div>

	<div className='social__media'>
		<div className='social__media--wrap'>
			<div className='footer__logo'>
				<a href='/' id='footer__logo'>
					<img src="assets/gs-icon-dark.svg" alt=""/>
					Gymshark
				</a>
			</div>
			<p className='website__rights'>
				Gymshark 2022. All rights reserved
			</p>
			<div className='social__icons'>
				<a href='/' className='social__icon--link' target="_blank">
					<img src="assets/facebook.svg" alt=""/>
				</a>
				<a href='/' className='social__icon--link' target="_blank">
					<img src="assets/youtube.svg" alt=""/>
				</a>
				<a href='/' className='social__icon--link' target="_blank">
					<img src="assets/twitter.svg" alt=""/>
				</a>
				<a href='/' className='social__icon--link' target="_blank">
					<img src="assets/instagram.svg" alt=""/>
				</a>
				<a href='/' className='social__icon--link' target="_blank">
					<img src="assets/tiktok.svg" alt=""/>
				</a>
			</div>
		</div>
	</div>
</div>
  )
}
