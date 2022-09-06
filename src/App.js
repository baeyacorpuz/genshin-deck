import { QueryClient, QueryClientProvider } from 'react-query';

import "./App.css";
import Characters from "./screens/characters/characters";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Characters />
    </QueryClientProvider>
  );
}

export default App;
