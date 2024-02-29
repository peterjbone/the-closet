import InputFilters from "../../InputFilters";
import "./Colors.css";

function Colors({ handleRadioChange }) {
	/* prettier-ignore*/
	return (
		<div>
			<h2 className="sidebar-title color-title">Colores</h2>

			<div>
				<label className="sidebar-label-container">
					<input
						type="radio"
						name="color"
						value=""
						onChange={handleRadioChange}
					/>
					<span className="checkmark all"></span>Todos
				</label>
				<InputFilters
					handleRadioChange={handleRadioChange}
					value="negro"
					title="Negro"
					name="color"
					color="black"
				/>
				<InputFilters
					handleRadioChange={handleRadioChange}
					value="azul"
					title="Azul"
					name="color"
					color="blue"
				/>
				<InputFilters
					handleRadioChange={handleRadioChange}
					value="rojo"
					title="Rojo"
					name="color"
					color="red"
				/>
				<InputFilters
					handleRadioChange={handleRadioChange}
					value="verde"
					title="Verde"
					name="color"
					color="green"
				/>
				<label className="sidebar-label-container">
					<input
						type="radio"
						name="color"
						value="blanco"
						onChange={handleRadioChange}
					/>
          <span
            className="checkmark"
            style={{backgroundColor: "white", border: "3px solid black"}}
          ></span>White
				</label>
			</div>
		</div>
	);
}

export default Colors;
