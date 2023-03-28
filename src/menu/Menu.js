const Menu = (props) => {
    const { options, menuName, handleClick, selectedOption } = props;
    return (
        <div>
            <label for={`for-${menuName}`}>{menuName}:</label>
            <select name={`${menuName}`}
                onChange={(e) => handleClick(e.target.value)}>
                {options.map((opt, idx) =>
                    <option
                        value={opt} key={idx}
                        selected={selectedOption === opt}
                    >
                        {opt}
                    </option>)}
            </select>
        </div>
    )
}

export default Menu;
