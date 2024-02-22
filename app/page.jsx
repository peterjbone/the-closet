import HeroTrend from "./components/heroTrend/HeroTrend";
import CategoryBanner from "./components/categoryBanner/CategoryBanner";
import FeaturedProducts from "./components/featuredProducts/FeaturedProducts";

function Home() {
	/* prettier-ignore*/
	return (
		<>
      <HeroTrend />	
      <CategoryBanner /> 
      <FeaturedProducts/>
		</>
	);
}

export default Home;
