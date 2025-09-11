function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') return `Price and Discount must be a number.`; //When price or discountRate is not a number.
    if (discountRate < 0 || discountRate > 1) return `Price must be a decimal value between 0 and 1.`; //For discounts of less than 0 or greater than 100%
    // TODO: Implement logic
    return price * (1 - discountRate); //calculates discounted price
}

function filterProducts(products, callback) {
    if (!Array.isArray(products) || typeof callback !== 'function') return `Please use a valid array and filter`;
    // TODO: Implement filtering logic
    return products.filter(callback);//callback function
}

function sortInventory(inventory, key) {
    if (!Array.isArray(inventory) || typeof key !== 'string') return [];
    // TODO: Implement sorting logic
    return [inventory].sort(a,b);
    if(a<b) return-1 //key will not be returned 
    if(a>b) return 1; // key will return
    return 0;

}

module.exports = {
    calculateDiscount,
    filterProducts,
    sortInventory
};