import { Link } from 'react-router-dom';
import './logo.module.scss';

function Logo() {
  return (
    <Link to="/">
      <h1 id='logo'>Logo</h1>
    </Link>
  );
}

export { Logo };

