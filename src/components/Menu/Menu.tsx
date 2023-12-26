import { Link } from 'react-router-dom';

export function Menu() {
  return (
    <>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>Инфо</Link>
    </>
  );
}
