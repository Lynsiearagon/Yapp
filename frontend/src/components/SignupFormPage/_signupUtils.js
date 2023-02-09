export const months = [
    "Jan", "Feb", "Mar", "Apr", 
    "May", "Jun", "Jul", "Aug", "Sept", 
    "Oct", "Nov", "Dec" 
];


export const days = [ 
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
];


export const range = (start, stop, step) =>
Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
