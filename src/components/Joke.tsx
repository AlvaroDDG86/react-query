import axios from "axios";
import { useQuery } from "react-query";

const Joke = () => {
  const { isLoading, isError, data, error, refetch } = useQuery(
    "joke",
    async () => {
      const { data } = await axios("https://api.chucknorris.io/jokes/random");
      return data;
    }
  );

  const getAnotherJokeHandler = () => {
    refetch();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <div>
      <p>{data.value}</p>
      <button onClick={getAnotherJokeHandler}>Get another</button>
    </div>
  );
};

export default Joke;
