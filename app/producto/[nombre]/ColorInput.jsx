"use client";

import styled from "styled-components";

function ColorInput({
	label,
	value,
	color,
	handleProductChange,
	valueChecked
}) {
	const MyLabel = styled.label`
		position: relative;
		color: ${color};
		cursor: pointer;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		border: medium solid ${color};
		padding: 0.5rem 1rem;
		margin-right: 1rem;
		border-radius: 15px;
		font-size: 1.3rem;
		font-weight: 700;

		&::before {
			content: "";
			height: 1.5rem;
			width: 1.5rem;
			border: medium solid ${color};
			border-radius: 50%;
		}
	`;

	const MyInput = styled.input`
		display: none;

		&:checked + label[data-colorinput="true"]::before {
			height: 1.5rem;
			width: 1.5rem;
			border: 6px solid ${color === "#FFFFFF" ? "#000000" : "#FFFFFF"};
			background-color: ${color};
		}

		&:checked + label[data-colorinput="true"] {
			background-color: ${color};
			color: ${color === "#FFFFFF" ? "#000000" : "#FFFFFF"};
		}
	`;

	/* prettier-ignore */
	return ( 
    <>
      <MyInput
        id={label}
        type="radio"
        name="color"
        value={value}
        checked={valueChecked === value}
        onChange={ handleProductChange }
        />
      <MyLabel
        data-colorinput="true"
        htmlFor={label}>
        {label}
      </MyLabel>
    </>
   );
}

export default ColorInput;
