function rot13(message) {
    return message.replace(/[A-Za-z]/g, (char) => {
      
        const start = char >= 'a' ? 97 : 65;
        return String.fromCharCode(
            ((char.charCodeAt(0) - start + 13) % 26) + start
        );
    });
}
