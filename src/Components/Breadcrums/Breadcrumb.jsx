import "./Breadcrumb.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";

const Breadcrumb = (props) => {
  const { product } = props;

  return (
    <div className="breadcrumb">
      HOME <img src={arrow_icon} alt="" />
      SHOP <img src={arrow_icon} alt="" />
      {product} <img src={arrow_icon} alt="" />
    </div>
  );
};

export default Breadcrumb;
