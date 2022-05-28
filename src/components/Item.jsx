const Item = ({ desktopImage, mobileImage, title }) => {
  return (
    <div className="group item">
      <img
        src={desktopImage}
        className="hidden w-full duration-200 md:block group-hover:scale-110"
        alt="Desktop Cover"
      />
      <img
        src={mobileImage}
        className="w-full md:hidden"
        alt="Mobile Cover"
      />

      {/* Item Gradient */}
      <div className="item-gradient"></div>

      <h5>{title}</h5>
    </div>
  );
};

export default Item;
