import { FaqItem } from "./FaqItem";

export const FaqList = ({ items }) => (
  <div className="space-y-4">
    {items.map((item, index) => (
      <FaqItem key={index} item={item} index={index} />
    ))}
  </div>
);
