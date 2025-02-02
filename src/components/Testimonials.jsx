import React from 'react'
import img1 from '../assets/img-1.jpg'
import img2 from '../assets/img-2.jpg'
import img3 from '../assets/img-3.jpg'
import img4 from '../assets/img-4.jpg'
import "../styles/components/Testimonials.css"

export const Testimonials = () => {
	return (
		<section id="testimonials">
			<div className="testimonials-heading">
				<span className="title-section">Testimonials</span>
			</div>

			<div className="testimonial-box-container">
				<div className="testimonial-box">
					<div className="box-top">
						<div className="profile">
							<div className="profile-img">
								<img src={img1} alt="Carla Arrieta" />
							</div>
							<div className="name-user">
								<strong>Carla Arrieta</strong>
								<span>@carlaarrietah</span>
							</div>
						</div>
					</div>
					<div className="client-comment">
						<p>Gymshark elevates my gym experience. The quality and comfort of their clothing, along with modern designs, motivate me in every workout. My go-to brand for exercise wear!</p>
					</div>
				</div>
				<div className="testimonial-box">
					<div className="box-top">
						<div className="profile">
							<div className="profile-img">
								<img src={img2} alt="Jose Maria Arze" />
							</div>
							<div className="name-user">
								<strong>Jose Maria Arze</strong>
								<span>@josema.eccommerce</span>
							</div>
						</div>
					</div>
					<div className="client-comment">
						<p>Gymshark blends functionality and style. The clothing is not only durable and comfortable but also has a modern design. My workouts have never been so comfortable and stylish.</p>
					</div>
				</div>
				<div className="testimonial-box">
					<div className="box-top">
						<div className="profile">
							<div className="profile-img">
								<img src={img3} alt="Ariana Aranibar" />
							</div>
							<div className="name-user">
								<strong>Ariana Aranibar</strong>
								<span>@ariss.priv</span>
							</div>
						</div>
					</div>
					<div className="client-comment">
						<p>Exceptional customer service and fast shipping. In addition to the quality of Gymshark's clothing, their customer service is fast and efficient. Fast shipping and a brand that cares about its customers.</p>
					</div>
				</div>
				<div className="testimonial-box">
					<div className="box-top">
						<div className="profile">
							<div className="profile-img">
								<img src={img4} alt="Fabian Pando" />
							</div>
							<div className="name-user">
								<strong>Fabian Pando</strong>
								<span>@fbnpablo.priv</span>
							</div>
						</div>
					</div>
					<div className="client-comment">
						<p>Gymshark offers variety and versatility. I always find what I need, whether it's for weightlifting or yoga. The versatility in their collections allows me to adapt my style to different activities. Very satisfied with the brand!</p>
					</div>
				</div>
			</div>
		</section>
	)
}
