import Person from "../interfaces/person";

export default function validatePerson(person: Person) {
  return (
    "name" in person &&
    "age" in person &&
    "active" in person &&
    typeof person.name === "string" &&
    typeof person.age === "number" &&
    (person.siblings === undefined || Array.isArray(person.siblings)) &&
    (person.metaData === undefined || typeof person.metaData === "object") &&
    typeof person.active === "boolean"
  );
}
