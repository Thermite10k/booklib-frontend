import React from "react";
import { Card } from "react-bootstrap";

export default function Bookcard({ book }) {
  return (
    <Card className="bookCards my-3">
      <Card.Body className="bookCards">
        <Card.Title>{book.name}</Card.Title>
        <Card.Subtitle>{book.id}</Card.Subtitle>
        <Card.Link href="#">More Details</Card.Link>
      </Card.Body>
    </Card>
  );
}
