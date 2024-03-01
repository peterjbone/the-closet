import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/heroSection/HeroSection";
import CategoryBanner from "./components/categoryBanner/CategoryBanner";
import FeaturedProducts from "./components/featuredProducts/FeaturedProducts";
import Collections from "./components/collections/Collections";
import TrendProducts from "./components/trendProducts/TrendProducts";

function Home() {
	/* prettier-ignore*/
	return (
    <>
      <Navbar/>
      <HeroSection />	
      <CategoryBanner /> 
      <FeaturedProducts />
      <Collections />
      <TrendProducts/>
		</>
	);
}

export default Home;
