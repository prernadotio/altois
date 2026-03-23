export default function MenuItem({ name, price, category, image }) {
  return (
    <div className="menu-item">
      <div className="menu-item-img-wrap">
        <img src={image} alt={name} className="menu-item-img" />
      </div>
      <div className="menu-item-body">
        <div>
          <p className="menu-item-category">{category}</p>
          <p className="menu-item-name">{name}</p>
        </div>
        <p className="menu-item-price">₹{price}</p>
      </div>
    </div>
  );
}