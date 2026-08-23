type OutputMessageProps = {
    text: string;
};

function OutputMessage({ text }: OutputMessageProps) {
    const message = (text === "") ? "(no message yet)" : `You entered: ${text}`;
    const messageHtml = <p>{message}</p>;
    return messageHtml;
}

export default OutputMessage;