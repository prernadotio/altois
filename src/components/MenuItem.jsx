export default function MenuItem({ name, price, category, image }) {
  // Append WebP format + smaller size to Unsplash URLs for faster load
  const optimizedImage = image.includes('unsplash.com')
    ? image.replace(/\?.*$/, '?w=380&q=70&fm=webp')
    : image;

  return (
    <div className="menu-item">
      <div className="menu-item-img-wrap">
        <img
          src={optimizedImage}
          alt={name}
          className="menu-item-img"
          width="380"
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