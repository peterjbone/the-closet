"use client";

function InputFilters({ handleRadioChange, value, title, name, color }) {
	/* prettier-ignore */
	return (
		<label className="sidebar-label-container">
      <input
        type="radio"
        name={name}
        value={value}
        onChange={handleRadioChange}
      />
			<span className="checkmark" style={color ? {backgroundColor: color} : {display: "block"}}></span>{title}
		</label>
	);
}

export default InputFilters;
