import React from "react";
import Billing from "./Billing";
import { withCart } from "./withProvider";
import CatalogueList from "./CatalogueList";

function Catalogue() {
  const [newTotal, setNewTotal] = React.useState(0);

  return (
    <div className="w-11/12 bg-white overflow-auto my-10 flex flex-col">
      <CatalogueList setNewTotal={setNewTotal} />
      <Billing newTotal={newTotal} />
    </div>
  );
}

export default withCart(Catalogue);
