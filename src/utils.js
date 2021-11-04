export const convertToCelsium = (value) => {
    return Math.round(value - 273)
}

export const getDate = (timestamp) => {
    let date = new Date(timestamp * 1000);
    let min;
    if (date.getMinutes() < 10) {
        min = '0' + date.getMinutes()
    } else {
        min = date.getMinutes()
    } console.log(timestamp);
    return date.getHours() + ":" + min;
}