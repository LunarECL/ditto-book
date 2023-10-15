import React from "react";

interface CardProps {
  title: string;
}

const Card = ({ title }: CardProps) => {
  return (
    <div className="card">
      {title}
      <span className="arrow">→</span>

      <style jsx>{`
        .card {
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 1px solid #e2e8f0; /* Lighter Border */
          padding: 10px 15px;
          margin-bottom: 10px;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
          transition: 0.3s;
          color: #4a4a4a;
        }

        .card:hover {
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
          transform: translateY(-2px);
          color: #000000;
        }

        .arrow {
          font-size: 1.2em;
          margin-left: 10px;
          color: #000000;
        }
      `}</style>
    </div>
  );
};

export default Card;
