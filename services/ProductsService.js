const { Products } = require('../models');

const getAllProductsService = async (productName) => {
    try {
        // Jika productName tidak disediakan, ambil semua produk yang belum di-soft delete
        const condition = productName ? { name: productName, deleted_at: null } : { deleted_at: null };

        // Menggunakan model Sequelize untuk mengambil data produk berdasarkan kondisi where
        const productlist = await Products.findAll({ where: condition });

        return productlist;
    } catch (error) {
        // Tangkap kesalahan dan log atau kembalikan kesalahan jika diperlukan
        console.error('Error in getAllProductsService:', error);
        throw error;
    }
};

const createProductsService = async (productData) => {
    try {
        // Menggunakan model Sequelize untuk membuat data produk baru
        const newProduct = await Products.create(productData);

        return newProduct;
    } catch (error) {
        // Tangkap kesalahan dan log atau kembalikan kesalahan jika diperlukan
        console.error('Error in createProductsService:', error);
        throw error;
    }
};

const updateProductsService = async (id, productData) => {
    try {
        const product = await Products.findByPk(id);

        if (!product) {
            throw new Error("Product not found");
        }

        // Mengisi kolom updated_at dengan waktu saat ini
        productData.updated_at = new Date();

        // Melakukan pembaruan pada data produk
        await product.update(productData);

        return product;
    } catch (error) {
        console.error('Error in updateProductsService:', error);
        throw error;
    }
};

const deleteProductsService = async (id) => {
    try {
        // Menggunakan model Sequelize untuk mengambil data produk berdasarkan ID
        const product = await Products.findByPk(id);

        if (!product) {
            throw new Error("Product not found");
        }

        // Soft delete dengan mengatur nilai deleted_at
        await product.update({ deleted_at: new Date() });

        return { id, message: "Product soft deleted successfully" };
    } catch (error) {
        console.error('Error in deleteProductService:', error);
        throw error;
    }
};

module.exports = {
    getAllProductsService,
    createProductsService,
    updateProductsService,
    deleteProductsService
};