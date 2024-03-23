import { useParams } from 'react-router-dom';

export default function ProductScreen() {
  const { slug } = useParams();

  //   const { slug } = params;

  return <div>{slug}</div>;
}
