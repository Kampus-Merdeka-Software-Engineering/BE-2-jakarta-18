const { getAllContactsService, createContactsService } = require('../services/ContactsService');

const getAllContacts = async (req, res) => {
    try {
        const contactlist = await getAllContactsService();

        res.status(200).json({
            data: contactlist,
            message: "Sukses mengambil data",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Gagal mengambil data",
        });
    }
}

const createContact = async (req, res) => {
    try {
        const result = await createContactsService(req.body);

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
}

// Implementasikan fungsi lainnya jika diperlukan

module.exports = {
    getAllContacts,
    createContact,
    // Tambahkan fungsi lainnya jika diperlukan
};
