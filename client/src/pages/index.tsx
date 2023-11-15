import Header from "@components/header";
import Loader from "@components/loader";
import WeatherCard from "@components/weathercard";
import { useAppSelector } from "@store/hooks";

const Home = () => {
  const data = useAppSelector((store) => store.search);
  console.log(data);


  return (
    <div className="App">
      <Header />
      <div className="card">
        {data.loading ? (
          <Loader/>
        ) : data.data.data ? (
          <WeatherCard />
        ) : (
          "No data found. Please enter the city name or valid city"
        )}
      </div>
    </div>
  );
};

export default Home;
