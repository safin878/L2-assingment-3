"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBorrowSummary = exports.borrowBook = void 0;
const book_model_1 = require("../models/book.model");
const borrow_model_1 = require("../models/borrow.model");
const borrowBook = async (req, res) => {
    try {
        const { book: bookId, quantity, dueDate } = req.body;
        const book = await book_model_1.Book.findById(bookId);
        if (!book)
            return res
                .status(404)
                .json({ success: false, message: "Book not found" });
        if (book.copies < quantity)
            return res
                .status(400)
                .json({ success: false, message: "Not enough copies available" });
        book.copies -= quantity;
        book.updateAvailability();
        await book.save();
        const borrow = new borrow_model_1.Borrow({ book: bookId, quantity, dueDate });
        await borrow.save();
        res
            .status(201)
            .json({
            success: true,
            message: "Book borrowed successfully",
            data: borrow,
        });
    }
    catch (error) {
        res
            .status(400)
            .json({ success: false, message: "Error borrowing book", error });
    }
};
exports.borrowBook = borrowBook;
const getBorrowSummary = async (req, res) => {
    try {
        const summary = await borrow_model_1.Borrow.aggregate([
            {
                $group: {
                    _id: "$book",
                    totalQuantity: { $sum: "$quantity" },
                },
            },
            {
                $lookup: {
                    from: "books",
                    localField: "_id",
                    foreignField: "_id",
                    as: "book",
                },
            },
            { $unwind: "$book" },
            {
                $project: {
                    book: { title: "$book.title", isbn: "$book.isbn" },
                    totalQuantity: 1,
                },
            },
        ]);
        res.json({
            success: true,
            message: "Borrowed books summary retrieved successfully",
            data: summary,
        });
    }
    catch (error) {
        res
            .status(500)
            .json({
            success: false,
            message: "Error retrieving borrow summary",
            error,
        });
    }
};
exports.getBorrowSummary = getBorrowSummary;
