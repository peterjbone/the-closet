import "./styles.css";

import HeroTrend from "./components/heroTrend/HeroTrend";
import CategoryBanner from "./components/categoryBanner/CategoryBanner";
import NewProducts from "./components/newProducts/NewProducts";

function Home() {
	/* prettier-ignore*/
	return (
		<>
      <HeroTrend />	
      <CategoryBanner /> 
      <NewProducts/>
		</>
	);
}

export default Home;
