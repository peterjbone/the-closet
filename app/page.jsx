import "./styles.css";

import HeroSection from "./components/heroSection/HeroSection";
import CategoryBanner from "./components/categoryBanner/CategoryBanner";
import FeaturedProducts from "./components/featuredProducts/FeaturedProducts";

function Home() {
	/* prettier-ignore*/
	return (
		<>
      <HeroSection />	
      <CategoryBanner /> 
      <FeaturedProducts/>
		</>
	);
}

export default Home;
