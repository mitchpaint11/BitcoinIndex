import { useEffect, useState } from "react";

function CurrencySelector({ currency, setCurrency }) {
  const [currencies, setCurrencies] = useState();

  // Called on mount only
  useEffect(() => {
    fetch(
      `https://justcors.com/tl_c376416/https://api.coindesk.com/v1/bpi/supported-currencies.json`
    )
      .then((res) => res.json())
      .then((data) => setCurrencies(data));
  }, []);

  return currencies ? (
    <select
      value={currency}
      onChange={(event) => setCurrency(event.target.value)}
    >
      {currencies.map((cur) => (
        <option value={cur.currency}>
          {cur.currency} {cur.country}
        </option>
      ))}
    </select>
  ) : (
    <p>Loading ...</p>
  );
}

export default CurrencySelector;
