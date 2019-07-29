import React, {
  lazy,
  Suspense
} from 'react';
import '../../css/App.css';
import { Facebook } from 'react-content-loader';

const UserContentLoader = () => <Facebook />

export default function App() {
  return (
    <main className="App">
      <Suspense fallback={UserContentLoader}>
        <User />
      </Suspense>
    </main>
  );
}

const User = lazy(() => import('../User'));
