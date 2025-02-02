import headerImg from '/assets/header.png';
import collectionImg from '/assets/collection.png';
import saleMenImg from '/assets/sale-1.png';
import saleWomenImg from '/assets/sale-2.jpg';
import "../styles/components/HeroSection.css";

export const HeroSection = () => {
	return (
		<>
			<section className="main-container animate__animated animate__fadeIn" id="home">
				<div className="main">
					<div className="main__content">
						<h1 className="main__name">NEW THIS MONTH</h1>
						<p className="main__desc">
							A new fit = another excuse to go gym. Just let us know what we’re training first.
						</p>
						<button className="shop-men-btn main__btn">
							<a href="#catalog">SHOP MEN</a>
						</button>
						<button className="main__btn shop-women-btn">
							<a href="#catalog">SHOP WOMEN</a>
						</button>
					</div>
					<div className="main__img--container">
						<img src={headerImg} alt="Header" id="main__img"/>
					</div>
				</div>
			</section>

			<section className="main-container2 animate__animated animate__fadeIn" id="home">
				<div className="main">
					<div className="main__img--container">
						<img src={collectionImg} alt="Collection" id="main__img"/>
					</div>
					<div className="main__content">
						<h1 className="main__name m">New Collection</h1>
						<p className="main__desc">
							#35 Items
						</p>
						<p className="available-p">
							Available on Store
						</p>
						<button className="new-collection-btn">
							<a href="#catalog">Shop Now</a>
						</button>
					</div>
				</div>
			</section>

			<section className='cards'>

				<h1>Want to see what all the talk is about</h1>

				<div className='cards__container'>

					<div className='card'>
						<img alt="Men Sale" src={saleMenImg} />
						<div className='card__features'>
							<div className='features'>
								<h2>MEN</h2>
								<p>SALE 40% OFF</p>
								<button className="men-card-btn">
									<a href="#catalog">Shop Now</a>
								</button>
							</div>
						</div>
					</div>

					<div className='card'>
						<img alt="Women Sale" src={saleWomenImg} />
						<div className='card__features'>
							<div className='features'>
								<h2>WOMEN</h2>
								<p>SALE 25% OFF</p>
								<button className="women-card-btn">
									<a href="#catalog">Shop Now</a>
								</button>
							</div>
						</div>
					</div>

				</div>
			</section>
		</>
	)
}
