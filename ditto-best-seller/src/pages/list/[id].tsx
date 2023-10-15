import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Book } from "@/types/common";
import { BookComponent } from "@/components/Book";
import Title from "@/components/Title";

function BookDetail() {
  const router = useRouter();
  const { id, display_name } = router.query;

  const [isLoading, setIsLoading] = useState(true);
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://books-api.nomadcoders.workers.dev/list?name=${id}`,
        );
        const json = await response.json();
        setBooks(json.results.books);
      } catch (err) {
        setError("Failed to fetch data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <Title tag="Detail" />
      <div className="container">
        <h1 className="title">{display_name}</h1>

        {isLoading ? (
          <div className="loader"></div>
        ) : error ? (
          <h3 className="error">{error}</h3>
        ) : (
          <div className="booklist">
            {books.map((book) => (
              <BookComponent key={book.rank} book={book} />
            ))}
          </div>
        )}
      </div>
      <style jsx>{`
        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 40px 20px;
          text-align: center;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          font-size: 2em;
          margin-bottom: 20px;
        }

        .booklist {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 20px;
          justify-content: center;
          width: 100%;
        }

        .error {
          color: red;
        }

        .loader {
          border: 8px solid #f8f8f8;
          border-radius: 50%;
          border-top: 8px solid #7434db;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}

export default BookDetail;
