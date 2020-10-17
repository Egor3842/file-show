export function TimeValidation(time) {
    if (time > 9) {
        return time
    }
    else return '0' + time
};