const {
    getAllProductsService,
    createProductsService,
    updateProductsService,
    deleteProductsService
} = require('../services/ProductsService');

const getAllProducts = async (req, res) => {
    try {
        const { productName } = req.params;
        const productList = await getAllProductsService(productName);

        res.status(200).json({
            data: productList,
            message: "Sukses mengambil data",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Gagal mengambil data",
        });
    }
};

const createProduct = async (req, res) => {
    try {
        const result = await createProductsService(req.body);

        res.status(201).json({
            message: "Berhasil Menambahkan Data",
            data: result,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Gagal Menambahkan Data",
        });
    }
};

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await updateProductsService(id, req.body);

        res.status(200).json({
            message: "Berhasil Memperbarui Data",
            data: result,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Gagal Memperbarui Data",
        });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await deleteProductsService(id);

        // Jika Anda ingin menampilkan data setelah soft delete, Anda dapat memanggil fungsi getAllProductsService
        const productlist = await getAllProductsService();

        res.status(200).json({
            data: productlist,
            message: `Product with ID ${result.id} deleted successfully`,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to delete product",
        });
    }
};

module.exports = {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
};