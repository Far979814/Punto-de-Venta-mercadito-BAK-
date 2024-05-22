export const productModelToDb = ( product ) => {
    const {
    code = '',
    supplier_id = '' ,
    date_of_sale = '',
    description = '',
    product_name = '',
    brand = '',      
    } = product

    return {
        code,
        supplier_id,
        date_of_sale,
        description,
        product_name,
        brand,
    };
}