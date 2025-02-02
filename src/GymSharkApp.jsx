import { Navbar } from "./components/Navbar"
import { HeroSection } from "./components/HeroSection"
import { CollectionSection } from "./components/catalog/CollectionSection"
import { Testimonials } from "./components/Testimonials"
import { FaQs } from "./components/FaQs"
import { Footer } from "./components/Footer"

function GymSharkApp() {
	return (
		<>
			<HeroSection />
			<CollectionSection/>
			<Testimonials/>
			<FaQs/>
			<Footer/>
			
			
		</>
	)
}

export default GymSharkApp
