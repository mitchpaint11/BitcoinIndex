import BitcoinIndex from "./BitcoinIndex";
import CurrencySelector from "./CurrencySelector";
import { useState } from "react";

function App() {
  const [currency, setCurrency] = useState("AUD");

  return (
    <>
      <h1>Bitcoin Index</h1>
      <CurrencySelector currency={currency} setCurrency={setCurrency} />
      <BitcoinIndex currency={currency} />
    </>
  );
}

export default App;
