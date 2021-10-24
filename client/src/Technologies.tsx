import { useQuery, gql } from "@apollo/client";

const GET_TECHNOLOGIES = gql`
  query {
    technologies {
      type
    }
  }
`;

const Technologies = () => {
  const { loading, error, data } = useQuery(GET_TECHNOLOGIES, {});

  console.log("Technologies: ", loading, error, data);

  if (loading) return <p>Loading Technologies...</p>;

  if (error) return <p>Error loading technologies!</p>;

  return (
    <>
      <h2>Technologies</h2>
      <ul>
        {data.technologies.map(({ type }: any) => (
          <li key={type}>{type}</li>
        ))}
      </ul>
    </>
  );
};

// const EXCHANGE_RATES = gql`
//   query GetExchangeRates {
//     rates(currency: "USD") {
//       currency
//       rate
//     }
//   }
// `;

// function ExchangeRates() {
//   const { loading, error, data } = useQuery(EXCHANGE_RATES);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;

//   return data.rates.map(({ currency, rate }: any) => (
//     <div key={currency}>
//       <p>
//         {currency}: {rate}
//       </p>
//     </div>
//   ));
// }

export default Technologies;
