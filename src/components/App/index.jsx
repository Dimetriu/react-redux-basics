import React, {
  lazy,
  Suspense,
  useState
} from 'react';
import '../../css/App.css';
import { Facebook } from 'react-content-loader';

export default function App() {

  const [userName, setUserName] = useState("Dimas");

  const handleUserNameChange = (e) => {
    e.preventDefault();

    console.log("Username changed");

    setUserName("Annie");
  }

  return (
    <main className="App">
      <Suspense fallback={<p style={{margin: 'auto'}}>Loading...</p>}>

        <Main onClick={handleUserNameChange}>
          <Suspense fallback={<Facebook />}>
            <User userName={userName} />
          </Suspense>
        </Main>

      </Suspense>
    </main>
  );
}

const User = lazy(() => import('../User'));
const Main = lazy(() => import('../Main'));
