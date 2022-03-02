import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Bookcard({ book }) {
  return book ? (
    <Card data-testid="card" className="bookCards my-3">
      <Card.Body className="bookCards">
        <Card.Title data-testid="title">{book.name}</Card.Title>
        <Card.Subtitle data-testid="subTitle">{book.id}</Card.Subtitle>
        <Card.Link>
          <Link to={`/book/${book.id}`}>More Details</Link>
        </Card.Link>
      </Card.Body>
    </Card>
  ) : (
    <div data-testid="noData">Error 500</div>
  );
}
