export const setHeightWidth = (string, width=320, height=300) => {
    return string.replace('{width}x{height}', `${width}x${height}`);
}
