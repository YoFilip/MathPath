import FaqItem from "./FaqItem";

const FaqList = ({ items }) => (
  <div className="space-y-4">
    {items.map((item, index) => (
      <FaqItem key={index} item={item} index={index} />
    ))}
  </div>
);

export default FaqList;
