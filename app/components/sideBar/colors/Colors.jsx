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
						name="colorFilter"
						value=""
						onChange={handleRadioChange}
					/>
					<span className="checkmark all"></span>Todos
				</label>
				<InputFilters
					handleRadioChange={handleRadioChange}
					value="negro"
					title="Negro"
					name="colorFilter"
					color="black"
				/>
				<InputFilters
					handleRadioChange={handleRadioChange}
					value="azul"
					title="Azul"
					name="colorFilter"
					color="blue"
				/>
				<InputFilters
					handleRadioChange={handleRadioChange}
					value="rojo"
					title="Rojo"
					name="colorFilter"
					color="red"
				/>
				<InputFilters
					handleRadioChange={handleRadioChange}
					value="verde"
					title="Verde"
					name="colorFilter"
					color="green"
				/>
				<label className="sidebar-label-container">
					<input
						type="radio"
						name="colorFilter"
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
