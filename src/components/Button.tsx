type ButtonProps = {
    onClick: () => void;
};

function Button({ onClick }: ButtonProps) {
    const button = <button 
        className="border rounded-sm bg-sky-300/75 hover:bg-sky-300/60 p-1 px-3"
        onClick={onClick}
    >
        Submit
    </button>;
    return button;
}

export default Button;