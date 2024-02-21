"use client";

import CategoryItem from "./CategoryItem";
import data from "./data";

function CategoryBanner() {
	/* prettier-ignore */
	return (
		<div className="grid lg:grid-cols-4 lg:gap-5 grid-cols-2 gap-3 px-8">
      {
        data.map(item => (
          <CategoryItem
            key={item.label}
            src={item.src}
            alt={item.label}
            label={item.label}
            link={item.link}
          />
        ))
      }
		</div>
	);
}

export default CategoryBanner;
