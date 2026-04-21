import "./ProductCard.css";

export function ProductCard(props) {
  const { redLabel, price, img, name } = props;
  return (
    <>
      <article>
        <span>{redLabel}</span>
        <img src={img} alt="bag" />
        <p>{name}</p>
        <h4>€{price},-</h4>
      </article>
    </>
  );
}

export default ProductCard;
