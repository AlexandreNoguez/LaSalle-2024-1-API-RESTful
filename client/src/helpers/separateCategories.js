export function separateCategories(categoriesData) {
    const categoryNames = [];
    const categoryCounts = {};

    categoriesData.forEach(product => {
        const category = product.productCategory;
        if (!categoryCounts[category]) {
            categoryNames.push(category);
            categoryCounts[category] = 1;
        } else {
            categoryCounts[category]++;
        }
    });

    const categoryQuantities = categoryNames.map(category => categoryCounts[category]);

    return {
        categoryNames: categoryNames,
        quantities: categoryQuantities
    };
}