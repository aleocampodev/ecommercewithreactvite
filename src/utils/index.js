/**
 * This function calculates total priceof a new order
 * @param {Array} products cartProduct: Array of Objects
 * @returns {number} Total price
 */

export const totalPrice = (products) => {
    // let sum = 0
    // products.forEach(product => sum += product.price)
    // return sum
    return products.reduce((sum, product) => sum + product.price, 0)
}