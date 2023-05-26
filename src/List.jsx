import React from 'react';

// accept props here
const List = ({ people }) => {
  // Map over prop "people" and code the right structure

  return people.map((person) => {
  return  <article className="person" key={person.id}>
      <img src={person.image} alt={person.name} />
      <div>
        <h4>{person.name}</h4>
        <p>{person.age} Years</p>
      </div>
    </article>;
  });
};

export default List;
