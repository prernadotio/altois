export default function MenuItem({ name, price, category, image }) {
  // Aggressive compression for below-fold menu images
  const optimizedImage = image.includes('unsplash.com')
    ? image.replace(/\?.*$/, '?w=320&q=50&fm=webp')
    : image;

  return (
    <div className="menu-item">
      <div className="menu-item-img-wrap">
        <img
          src={optimizedImage}
          alt={name}
          className="menu-item-img"
          width="320"
          height="200"
          loading="lazy"
          decoding="async"
        />
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