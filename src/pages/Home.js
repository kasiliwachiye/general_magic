import { useEffect, useState } from "react";
import AppImage from "../components/AppImage";
import NavBar from "../components/NavBar";

const url = "https://pixabay.com/api/?key=26032813-5eca57a90774446a771ac3a81";

const Home = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (json) => {
          const data = json.hits;
          setIsLoaded(true);
          setItems(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);


  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-4">
            {items
              .filter(
                (item) => item.imageWidth > 4500 && item.imageHeight === 4000
              )
              .map((item) => {
                return (
                  <AppImage
                    key={item.id}
                    src={item.largeImageURL}
                    alt={item.title}
                  />
                );
              })}
          </div>
          <div className="col-span-3">
            {items
              .filter(
                (item) => item.imageWidth < 4500 && item.imageHeight > 5000
              )
              .map((item) => {
                return (
                  <AppImage
                    key={item.id}
                    src={item.largeImageURL}
                    alt={item.title}
                  />
                );
              })}
          </div>
          <div className="col-span-5">
            {items
              .filter(
                (item) => item.imageWidth > 6000 && item.imageHeight > 3500
              )
              .map((item) => {
                return (
                  <AppImage
                    key={item.id}
                    src={item.largeImageURL}
                    alt={item.title}
                  />
                );
              })}
            <div className="grid grid-cols-2 gap-4">
              {items
                .filter(
                  (item) => item.imageWidth < 4500 && item.imageHeight < 4000
                )
                .map((item) => {
                  return (
                    <AppImage
                      key={item.id}
                      src={item.largeImageURL}
                      alt={item.title}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
