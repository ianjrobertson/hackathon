const ButtonIcon = ({ icon, text, onClick }) => {
    return (
        <button
            className="button-icon group" onClick={onClick}>
            {icon}
            <span className="button-tooltip group-hover:scale-100 z-50">{text}</span>
        </button>
    );
}

export default ButtonIcon;