const { Products } = require('../models'); 
// Pastikan Anda mengganti dengan nama model dan path yang sesuai

const getAllProductsService = async () => {
    try {
        // Menggunakan model Sequelize untuk mengambil semua data makanan
        const productlist = await Products.findAll();

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
    // Tambahkan fungsi CRUD lainnya jika diperlukan
};
