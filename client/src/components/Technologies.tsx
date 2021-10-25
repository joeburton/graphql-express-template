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

export default Technologies;
