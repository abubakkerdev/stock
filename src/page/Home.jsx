import Child from "../components/Child";
import imageUrl from "../utils/imageUrl";

function Home() {
  return (
    <section>
      <div className="parent">
        {imageUrl.map((image, index) => (
          <Child key={index} url={image} />
        ))}
      </div>
    </section>
  );
}

export default Home;
