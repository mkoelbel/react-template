type TextInputProps = {
    text: string;
    setText: (val: string) => void;
};

function TextInput({ text, setText }: TextInputProps) {
    const input = <input 
        type="text" 
        value={text} 
        onChange={(event) => setText(event.target.value)} 
        placeholder="Enter text here"
    />;
    return input;
}

export default TextInput;