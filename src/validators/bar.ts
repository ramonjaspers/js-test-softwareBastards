import Bar from "../interfaces/bar";

// explicitly used any to show general validation logic
export default function isValidBar(bar: any): bar is Bar {
  // export default function validateBar(bar: Bar) {
  return (
    typeof bar === "object" &&
    bar.name !== undefined &&
    bar.address !== undefined &&
    bar.drinks !== undefined &&
    typeof bar.name === "string" &&
    typeof bar.address === "string" &&
    typeof bar.drinks === "object" &&
    Array.isArray(bar.drinks.beer)
  );
}
