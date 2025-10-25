import { useParams } from "react-router-dom";

const CardDetail = () => {
  const { id } = useParams();
  // console.log(id);
  return <div>CardDetail : {id}</div>;
};

export default CardDetail;
