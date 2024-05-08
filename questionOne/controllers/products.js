const axios = require('axios');

exports.getProductsInCategory = async (req, res) => {
    try {
        console.log(0)
        const { categoryname, companyname } = req.params;
        const n = req.query.n || 10;
        const minPrice = req.query.minPrice||0;
        const maxPrice = req.query.maxPrice||Infinity;
        const currentPage = req.query.page || 1;

        const bearerToken = process.env.BEARER;

        
        const config = {
            headers: {
                Authorization: `Bearer ${bearerToken}`
            }
        };
        console.log(1);
        const response = await axios.get(`http://20.244.56.144/test/companies/${companyname}/categories/${categoryname}/products?top=1000000000&minPrice=1&maxPrice=1000000`,config);
        console.log(2)
        const allProducts = response.data;

        
        let filteredProducts = allProducts.filter(product => {
            return (!minPrice || product.price >= minPrice) && (!maxPrice || product.price <= maxPrice);
        });

        
        filteredProducts.sort((a, b) => a.price - b.price); 
        
        const resultPerPage = 10;
        const skip = (currentPage - 1) * resultPerPage;

        
        const paginatedProducts = filteredProducts.slice(skip, skip + resultPerPage);

        
        res.status(200).json({
            success: true,
            products: paginatedProducts,
            filteredProductsCount: filteredProducts.length
        });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
