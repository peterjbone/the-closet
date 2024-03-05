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
						name="category"
						value=""
						onChange={handleRadioChange}
					/>
					<span className="checkmark"></span>Todos
				</label>
				<InputFilters
					handleRadioChange={handleRadioChange}
					value="Camisetas y Polos"
					title="Camisetas y Polos"
					name="category"
				/>
				<InputFilters
					handleRadioChange={handleRadioChange}
					value="Chaquetas y Abrigos"
					title="Chaquetas y Abrigos"
					name="category"
				/>
				<InputFilters
					handleRadioChange={handleRadioChange}
					value="Sudaderas y Hoodies"
					title="Sudaderas y Hoodies"
					name="category"
				/>
				<InputFilters
					handleRadioChange={handleRadioChange}
					value="Pantalones Cortos de Ciclismo"
					title="Pantalones Cortos de Ciclismo"
					name="category"
				/>
				<InputFilters
					handleRadioChange={handleRadioChange}
					value="Pantalones Formales"
					title="Pantalones Formales"
					name="category"
				/>
				<InputFilters
					handleRadioChange={handleRadioChange}
					value="Leggings y Pantalones Deportivos"
					title="Leggings y Pantalones Deportivos"
					name="category"
				/>
				<InputFilters
					handleRadioChange={handleRadioChange}
					value="Faldas"
					title="Faldas"
					name="category"
				/>
				<InputFilters
					handleRadioChange={handleRadioChange}
					value="Zapatillas de Casa"
					title="Zapatillas de Casa"
					name="category"
				/>
				<InputFilters
					handleRadioChange={handleRadioChange}
					value="Botas"
					title="Botas"
					name="category"
				/>
			</div>
		</div>
	);
}

export default CategoryFilters;
