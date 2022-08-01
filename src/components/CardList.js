import React from "react";
import { Card } from "./Card";

export const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((user) => {
        return (
          <Card
            key={`card-key-${user.id}`}
            id={user.id}
            name={user.name}
            email={user.email}
          />
        );
      })}
    </div>
  );
};
