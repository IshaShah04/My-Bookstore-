// Controller for handling book-related requests – Quite by Isha Shah
import Book from "../model/book.model.js";

// Fetch all books from the database
export const getBook = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        console.error("Failed to fetch books:", error);
        res.status(500).json({ message: "Unable to retrieve books at this time. Please try again later." });
    }
};
