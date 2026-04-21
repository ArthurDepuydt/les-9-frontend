import "./App.css";
import Button from "./assets/components/Button/Button";
import ProductCard from "./assets/components/ProductCard/ProductCard";
import Tile from "./assets/components/Tile/Tile";
import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";
import brand from "./assets/brand.png";
import story from "./assets/our_story.png";

function App() {
  return (
    <>
      <h1>Handbags & Purses</h1>
      <nav>
        <Button buttonText={"to the collection"} disabled={false} />
        <Button buttonText={"shop all bags"} disabled={false} />
        <Button buttonText={"pre-orders"} disabled={true} />
      </nav>

      <main>
        <ProductCard
          redLabel={"Best seller"}
          img={bag1}
          name={"The handy bag"}
          price={"400"}
        />
        <ProductCard
          redLabel={"Best seller"}
          img={bag2}
          name={"The stylish bag"}
          price={"250"}
        />
        <ProductCard
          redLabel={"New collection"}
          img={bag3}
          name={"The simple bag"}
          price={"300"}
        />
        <ProductCard
          redLabel={"New collection"}
          img={bag4}
          name={"The trendy bag"}
          price={"150"}
        />
      </main>

      <footer>
        <Tile title={"The brand"} img={""}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Tile>
        <Tile title={""} img={brand} />

        <Tile title={"Our story"} img={story} />

        <Tile title={"Our story"} img={""}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </Tile>
      </footer>
    </>
  );
}

export default App;
