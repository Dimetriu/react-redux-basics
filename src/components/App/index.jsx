import React, {
  lazy,
  Suspense
} from 'react';
import '../../css/App.css';
import { Facebook } from 'react-content-loader';

export default function App() {
  return (
    <main className="App">
      <Suspense fallback={<p style={{margin: 'auto'}}>Loading...</p>}>

        <Main>
          <Suspense fallback={<Facebook />}>
            <User userName="Dimas" />
          </Suspense>
        </Main>

      </Suspense>
    </main>
  );
}

const User = lazy(() => import('../User'));
const Main = lazy(() => import('../Main'));
