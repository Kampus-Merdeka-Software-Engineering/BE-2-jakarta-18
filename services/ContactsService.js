const { Contacts } = require('../models'); 
// Pastikan Anda mengganti dengan nama model dan path yang sesuai

const getAllContactsService = async () => {
    try {
        // Menggunakan model Sequelize untuk mengambil semua data makanan
        const Contactlist = await Contacts.findAll();

        return Contactlist;
    } catch (error) {
        // Tangkap kesalahan dan log atau kembalikan kesalahan jika diperlukan
        console.error('Error in getAllContactsService:', error);
        throw error;
    }
};

const createContactsService = async (ContactsData) => {
    try {
        // Menggunakan model Sequelize untuk membuat data makanan baru
        const newContact = await Contacts.create(ContactsData);

        return newContact;
    } catch (error) {
        // Tangkap kesalahan dan log atau kembalikan kesalahan jika diperlukan
        console.error('Error in createContactsService:', error);
        throw error;
    }
};

// Mungkin ada implementasi lain untuk fungsi CRUD lainnya

module.exports = {
    getAllContactsService,
    createContactsService,
};
