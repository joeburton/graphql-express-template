import { useQuery, gql } from "@apollo/client";

const GET_DEVELOPERS = gql`
  query {
    developers {
      name
      skills
    }
  }
`;

const DisplayDevelopers = () => {
  const { loading, error, data } = useQuery(GET_DEVELOPERS);

  console.log("Developers: ", loading, error, data);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error loading developers!</p>;

  return (
    <>
      <h2>Developers</h2>
      <ul>
        {/* {data.developers.map(({ name, skills }: any) => (
          <li key={name}>{`${name}, ${skills}`}</li>
        ))} */}
        <div className="active">
          <pre>{JSON.stringify(data.developers, null, 2)}</pre>
        </div>
      </ul>
    </>
  );
};

export default DisplayDevelopers;
