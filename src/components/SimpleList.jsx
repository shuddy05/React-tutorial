import React from "react";

const people = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];
const scientists = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
  },
];
const chemists = scientists.filter(
  (scientist) => scientist.profession === "chemist"
);

const EachSCientist = ({ name, profession }) => {
  return (
    <li>
      {name}: {profession}
    </li>
  );
};

const SimpleList = () => {
  return (
    <div>
      <h1>LIST OF NOTABLE SCIENTISTS</h1>
      <div>
        {chemists.map((person) => {
          return <EachSCientist key={person.id} {...person} />;
        })}
      </div>
    </div>
  );
};

export default SimpleList;
