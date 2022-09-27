import React from "react";
import { useParams } from "react-router-dom";

const Category: React.FC = () => {
  const { type } = useParams();
  return <div>'Category Here' {type}</div>;
};

export default Category;
