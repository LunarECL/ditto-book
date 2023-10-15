import React, { FC } from "react";
import { Book } from "@/types/common";

interface BookComponentProps {
  book: Book;
}

export const BookComponent = ({ book }: BookComponentProps) => (
  <>
    <div className="book">
      <img src={book.book_image} alt={book.title} className="bookImg" />
      <h4 className="bookTitle">{book.title}</h4>
      <h5 className="bookAuthor">{book.author}</h5>
      <a
        href={book.amazon_product_url}
        target="_blank"
        rel="noopener noreferrer"
        className="buynow"
      >
        BUY NOW &rarr;
      </a>
    </div>
    <style jsx>{`
      .book {
        padding: 10px;
        text-align: center;
      }

      .bookImg {
        width: 100px;
        height: 150px;
        object-fit: cover;
        margin-bottom: 10px;
      }

      .bookTitle {
        font-size: 1.2em;
        margin: 5px 0;
      }

      .bookAuthor {
        color: #666;
        margin-bottom: 10px;
      }

      .buynow {
        color: #fff;
        background-color: #7434db;
        padding: 5px 10px;
        text-decoration: none;
        border-radius: 4px;
      }
    `}</style>
  </>
);
