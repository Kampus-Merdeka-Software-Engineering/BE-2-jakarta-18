const { Products } = require('../models'); 
// Pastikan Anda mengganti dengan nama model dan path yang sesuai

const getAllProductsService = async (productName) => {
    try {
        // Menetapkan kondisi where berdasarkan nama produk
        const whereCondition = productName ? { name: productName } : {};

        // Menggunakan model Sequelize untuk mengambil data makanan berdasarkan kondisi where
        const productlist = await Products.findAll({
            where: whereCondition,
        });

        return productlist;
    } catch (error) {
        // Tangkap kesalahan dan log atau kembalikan kesalahan jika diperlukan
        console.error('Error in getAllProductsService:', error);
        throw error;
    }
};

const createProductsService = async (productsData) => {
    try {
        // Menggunakan model Sequelize untuk membuat data makanan baru
        const newProduct = await Products.create(productsData);

        return newProduct;
    } catch (error) {
        // Tangkap kesalahan dan log atau kembalikan kesalahan jika diperlukan
        console.error('Error in createProductsService:', error);
        throw error;
    }
};

// Mungkin ada implementasi lain untuk fungsi CRUD lainnya

module.exports = {
    getAllProductsService,
    createProductsService,
};
