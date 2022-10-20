import { useParams } from 'react-router-dom';

const Cast = () => {
  const params = useParams();
  console.log(params);
  return <div>cast</div>;
};

export default Cast;
