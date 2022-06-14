export function RandomHex(length = 16) {
    let string = "";
    const chars = "0123456789abcdef";

    for (let i = 0; i < length; i++) {
        string += chars[Math.floor(Math.random() * chars.length)];
    }

    return string;
}
