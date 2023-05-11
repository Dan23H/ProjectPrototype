export const RadioButton = ({ value, checked, onChange, children }) => {
    const handleClick = () => {
      if (!checked) {
        onChange(value);
      }
    }

    return(
        <button
            className={`radio-button${checked ? " checked" : ""}`}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}