import { useEffect, useState } from "react";
import Link from "next/link";
import Card from "@/components/Card";
import Title from "@/components/Title";

interface BookList {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: string;
}

export default function IndexPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [lists, setLists] = useState<BookList[]>([]);

  useEffect(() => {
    fetch(`https://books-api.nomadcoders.workers.dev/lists`).then((response) =>
      response.json().then((json) => {
        setLists(json.results);
        setIsLoading(false);
      }),
    );
  }, []);

  return (
    <>
      <Title tag="Home" />
      <div className={"container"}>
        <h1 className={"title"}>The Ditto Times Best Seller Explorer</h1>

        {isLoading ? (
          <div className="loader"></div>
        ) : (
          <ul className="lists">
            {lists.map((list) => (
              <li key={list.list_name} className="list">
                <Link
                  href={`/list/${list.list_name_encoded}?display_name=${list.list_name}`}
                >
                  <Card title={list.list_name} />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          margin: 0;
          background-color: #f8f8f8;
          padding: 20px;
        }

        .title {
          margin-bottom: 20px;
          color: #4a4a4a;
          font-size: 24px;
          font-weight: bold;
        }

        .lists {
          padding: 0;
          margin: 0;
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
        }

        .list {
          margin-bottom: 20px;
        }

        .loader {
          border: 8px solid #f8f8f8;
          border-radius: 50%;
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
