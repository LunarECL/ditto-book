import Title from "@/components/Title";

export default function About() {
  return (
    <div>
      <Title tag="About" />
      <h3 className="title">ABOUT US</h3>
      <p>
        Welcome to the official explorer for The Ditto Times Best Seller list
        explorer.
        <br />
        We hope you enjoy your stay!
      </p>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background-color: #f8f8f8;
          text-align: center;
          padding: 20px;
        }

        .title {
          color: #7434db;
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
        }

        p {
          max-width: 600px;
        }
      `}</style>
    </div>
  );
}
