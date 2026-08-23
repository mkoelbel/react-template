type ButtonProps = {
    onClick: () => void;
};

function Button({ onClick }: ButtonProps) {
    const button = <button onClick={onClick}>Submit</button>;
    return button;
}

export default Button;