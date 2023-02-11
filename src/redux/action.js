//for add item to cart

export const addCart = (product) => {
    return {
        type: "ADDITEM",
        playload:product
    }
}

// for delete item from cart
export const delCart = (product) => {
    return {
        type: "DELITEM",
        playload:product
    }
}
