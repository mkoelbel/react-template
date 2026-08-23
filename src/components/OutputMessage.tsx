type OutputMessageProps = {
    text: string;
};

function OutputMessage({ text }: OutputMessageProps) {
    const message = (text === "") ? "(no message yet)" : `You entered: ${text}`;
    const messageHtml = <div
        className="text-sky-300/75"
    >{message}</div>;
    return messageHtml;
}

export default OutputMessage;