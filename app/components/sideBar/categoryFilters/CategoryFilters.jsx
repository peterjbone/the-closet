import InputFilters from "../../InputFilters";
import "./CategoryFilters.css";

function CategoryFilters({ handleRadioChange }) {
	/* prettier */
	return (
		<div>
			<h2 className="sidebar-title category-title">Categoría</h2>

			<div>
				<label className="sidebar-label-container">
					<input
						type="radio"
						name="test"
						value=""
						onChange={handleRadioChange}
					/>
					<span className="checkmark"></span>Todos
				</label>
				<InputFilters
					handleRadioChange={handleRadioChange}
					value="prendaSuperior"
					title="Prenda Superior"
					name="test"
				/>
				<InputFilters
					handleRadioChange={handleRadioChange}
					value="prendaInferior"
					title="Prenda Inferior"
					name="test"
				/>
				<InputFilters
					handleRadioChange={handleRadioChange}
					value="calsado"
					title="Calzado"
					name="test"
				/>
			</div>
		</div>
	);
}

export default CategoryFilters;
