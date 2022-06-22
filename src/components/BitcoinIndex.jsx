import { useState, useEffect } from "react";

function BitcoinIndex({ currency }) {
  const [price, setPrice] = useState();

  // Called on mount only
  useEffect(() => {
    fetch(`https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`)
      .then((res) => res.json())
      .then((data) => setPrice(data.bpi[currency].rate));
  }, [currency]);

  return (
    <>
      {price ? (
        <p>
          Current Price: {currency} {price}
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default BitcoinIndex;
