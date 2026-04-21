import "./Tile.css";

export function Tile(props) {
  const { title, img } = props;
  if (img) {
    return (
      <>
        <section>
          <img src={img} alt="Brand image" />
        </section>
      </>
    );
  } else {
    return (
      <>
        <section>
          <h2>{title}</h2>
          {props.children}
        </section>
      </>
    );
  }
}

export default Tile;
