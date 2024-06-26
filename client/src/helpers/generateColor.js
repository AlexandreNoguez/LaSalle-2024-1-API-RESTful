export const generateRandomColor = () => {
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
};

export const getColor = (index) => {
    return predefinedColors[index % predefinedColors.length];
};

const predefinedColors = [
    '#00000095', '#FF000095', '#00FF0095', '#0000FF95', '#FFFF0095', '#00FFFF95', '#FF00FF95', '#C0C0C095', '#80808095', '#80000095',
    '#80800095', '#00800095', '#80008095', '#00808095', '#00008095', '#FFA07A95', '#FAEBD795', '#00FF7F95', '#7FFFD495', '#F0FFF095',
    '#F5F5DC95', '#FFE4C495', '#FFEBCD95', '#FFEFD595', '#FFF5EE95', '#FFF8DC95', '#FFFACD95', '#FFFAF095', '#FFFAFA95', '#FFFF0095',
    '#FFFFE095', '#FFFFF095', '#F0F8FF95', '#F5F5F595', '#F5FFFA95', '#F8F8FF95', '#FAF0E695', '#FAFAD295', '#FCFCFC95', '#FDF5E695',
    '#FF000095', '#FF00FF95', '#FF450095', '#FF634795', '#FF69B495', '#FF7F5095', '#FF8C0095', '#FFA50095', '#FFB6C195', '#FFC0CB95',
    '#FFD70095', '#FFDAB995', '#FFDEAD95', '#FFE4E195', '#FFE4B595', '#FFE4C495', '#FFE4E195', '#FFEBCD95', '#FFEFD595', '#FFF0F595',
    '#FFF5EE95', '#FFF8DC95', '#FFFACD95', '#FFFAF095', '#FFFAFA95', '#FFFF0095', '#FFFFE095', '#FFFFF095', '#FFFFFF95', '#80000095',
    '#80008095', '#80800095', '#80808095', '#80808095', '#80000095', '#80008095', '#80800095', '#80808095', '#80808095', '#80000095',
    '#80008095', '#80800095', '#80808095', '#FFFFFF95', '#F5F5F595', '#DCDCDC95', '#D3D3D395', '#C0C0C095', '#A9A9A995', '#80808095',
    '#69696995', '#00000095'
];