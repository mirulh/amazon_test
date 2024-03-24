import Alert from 'react-bootstrap/Alert';

export default function MessageBox(prop) {
  console.log(
    `Children of prop is the error message, error ->: ${prop.children}`
  );
  return <Alert variant={prop.variant || 'info'}>{prop.children}</Alert>;
}
