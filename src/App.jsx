import { useGlobalContext } from './context';
import SetupForm from './SetupForm';
import Loading from './Loading';

function App() {
  const { waiting, loading, questions, index, correct } = useGlobalContext();

  if (waiting) {
    return <SetupForm />;
  }

  if (loading) {
    return <Loading />;
  }

  return <h1>hi</h1>;
}

export default App;
