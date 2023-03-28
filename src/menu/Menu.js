import styles from './Menu.module.css';

const Menu = (props) => {
    const { options, menuName, handleClick, selectedOption } = props;
    return (
        <div>
            <label>{menuName}:</label>
            <select
                className={styles.select}
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
