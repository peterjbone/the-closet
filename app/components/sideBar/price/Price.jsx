import "./Price.css";
import InputFilters from "../../InputFilters";

function Price({ handleRadioChange }) {
	/* prettier-ignore*/
	return (
		<div>
			<h2 className="sidebar-title price-title">Precio</h2>

			<div>
				<label className="sidebar-label-container">
					<input
						type="radio"
						name="test2"
						value=""
						onChange={handleRadioChange}
					/>
					<span className="checkmark"></span>Todos
				</label>
        <InputFilters
          handleRadioChange={handleRadioChange}
          value={10}
          title="$0 - 10"
          name="test2"
        />
        <InputFilters
          handleRadioChange={handleRadioChange}
          value={20}
          title="$10 - $20"
          name="test2"
        />
        <InputFilters
          handleRadioChange={handleRadioChange}
          value={30}
          title="$20 - $30"
          name="test2"
        />
        <InputFilters
          handleRadioChange={handleRadioChange}
          value={40}
          title="$30 - $40"
          name="test2"
        />
        <InputFilters
          handleRadioChange={handleRadioChange}
          value={50}
          title="$40 - $50"
          name="test2"
        />
        <InputFilters
          handleRadioChange={handleRadioChange}
          value={60}
          title="$50 - $60"
          name="test2"
        />
			</div>
		</div>
	);
}

export default Price;
