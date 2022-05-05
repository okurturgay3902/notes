import React from "react";
import { Button, Card } from "react-bootstrap";

const Note = ({ note, removeNote }) => {
  const { id, title, body } = note;
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <Button variant="primary" onClick={()=>removeNote(id)}>Sil</Button>
      </Card.Body>
    </Card>
  );
};

export default Note;