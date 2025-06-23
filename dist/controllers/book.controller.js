"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.getBookById = exports.getAllBooks = exports.createBook = void 0;
const book_model_1 = require("../models/book.model");
// Create book
const createBook = async (req, res) => {
    try {
        const book = new book_model_1.Book(req.body);
        await book.save();
        res.status(201).json({
            success: true,
            message: "Book Created Successfully",
            data: book,
        });
    }
    catch (error) {
        res
            .status(400)
            .json({ success: false, message: "Validation failed", error });
    }
};
exports.createBook = createBook;
// Get All Book
const getAllBooks = async (req, res) => {
    try {
        const { filter, sortBy = "createdAt", sort = "asc", limit = "10", } = req.query;
        const query = {};
        if (filter)
            query.genre = filter;
        const books = await book_model_1.Book.find(query)
            .sort({ [sortBy]: sort === "desc" ? -1 : 1 })
            .limit(parseInt(limit));
        res.json({
            success: true,
            message: "Books retrieved successfully",
            data: books,
        });
    }
    catch (error) {
        res
            .status(500)
            .json({ success: false, message: "Error retrieving books", error });
    }
};
exports.getAllBooks = getAllBooks;
// Get Book By Id
const getBookById = async (req, res) => {
    try {
        const book = await book_model_1.Book.findById(req.params.bookId);
        if (!book)
            return res
                .status(404)
                .json({ success: false, message: "Book not Found" });
        res.json({
            success: true,
            message: "Book retrieved successfully",
            data: book,
        });
    }
    catch (error) {
        res
            .status(500)
            .json({ success: false, message: "Error retrieving book", error });
    }
};
exports.getBookById = getBookById;
// Get Update Book
const updateBook = async (req, res) => {
    try {
        const book = await book_model_1.Book.findByIdAndUpdate(req.params.bookId, req.body, {
            new: true,
        });
        if (!book)
            return res
                .status(404)
                .json({ success: false, message: "Book not found" });
        res.json({
            success: true,
            message: "Book Updated Successfully",
            data: book,
        });
    }
    catch (error) {
        res
            .status(400)
            .json({ success: false, message: "Error updating book", error });
    }
};
exports.updateBook = updateBook;
// Get delete Book
const deleteBook = async (req, res) => {
    try {
        await book_model_1.Book.findByIdAndDelete(req.params.bookId);
        res.json({
            success: true,
            message: "Book deleted successfully",
            data: null,
        });
    }
    catch (error) {
        res
            .status(404)
            .json({ success: false, message: "Error deleting book", error });
    }
};
exports.deleteBook = deleteBook;
