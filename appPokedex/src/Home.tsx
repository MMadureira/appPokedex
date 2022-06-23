import { useContext, useState } from 'react'
import { signInWithPopup, getAuth } from "firebase/auth"
import { provider } from "./services/firebase"
import { useNavigate } from 'react-router-dom';
import { userContext } from './context/contextPkm';
// import { Button } from './components/Button/Button';
// import googleLogo from './assets/google-icon.svg'
// import avatar from './assets/avatar.svg';
import './styles/App.css';
// import avatar from './assets/google-icon.svg';
import Login from './assets/Login.svg';

type userType = {
  name: string;
  email: string;
  avatar: string;
}

const auth = getAuth();

function Home() {

  const { userValue, setUserValue } = useContext(userContext);

  const navi = useNavigate();

  function naviToMenu() {
    navi('/User');
  }

  const [user, setUser] = useState<userType>();
  const [hidden, setHidden] = useState(true)

  const auth = getAuth();

  async function signIn() {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    const { displayName, email, photoURL } = result.user;
    if (displayName != null && email != null && photoURL != null) {
      setUser({
        name: displayName,
        email: email,
        avatar: photoURL,
      })
      setHidden(false)
    }
  }

  return (
    <div className='borda'>
      <h1>Home</h1>
      <div className='home'>
        <p><span className='bold'>Nome do Usuário:</span> {user?.name || 'faça o login'}</p>
        <p><span className="bold">Email:</span> {user?.email || ''}</p>
        <div className='flex'>
          <img className='photo' src={user?.avatar || Login} />
          <button className={hidden ? '' : 'hidden'} onClick={signIn}>Logar</button>
          <p className={hidden ? 'hidden' : ''} onClick={naviToMenu}>Vá para a pokeparada mais próxima:</p>
          <button className={hidden ? 'hidden' : ''} onClick={naviToMenu}>Pokeparada</button>
        </div>
      </div>
    </div>
  )
}

export default Home;

