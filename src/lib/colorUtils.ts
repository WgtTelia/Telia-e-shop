export const colorMapping: { [key: string]: string } = {
    black: '#232222',
    red: '#d11717',
    pink: '#FFC0CB',
    yellow: '#FFEA7A',
    almond: '#f7f4c6',
    blue: '#4682B4',
    green: '#87A96B',
    lavender: '#B9B9FB',
    purple: '#570757',
    white: '#FAFAFA',
    grey: '#808080',
};

export const mapColorToHex = (color: string): string => {
    return colorMapping[color.toLowerCase()] || '#000000';
};
