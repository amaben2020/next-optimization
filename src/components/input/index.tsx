import { useState, useTransition } from "react";

const filterProducts = (searchTerm: string) => {
  return ["one", "two", "three"].filter((elem) =>
    elem.toLowerCase().includes(searchTerm),
  );
};

export function Input() {
  const [isPending, startTransition] = useTransition();
  const [filterTerm, setFilterTerm] = useState("");

  const filteredProducts = filterProducts(filterTerm);

  function updateFilterHandler(event: any) {
    startTransition(() => {
      setFilterTerm(event.target.value);
    });
  }

  return (
    <div id="app">
      <input type="text" onChange={updateFilterHandler} />
      {isPending && <p>Updating List...</p>}
      {JSON.stringify(filteredProducts)}
    </div>
  );
}
