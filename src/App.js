import { Pages } from './components/pages/Pages';
import { Provider } from 'react-redux';
import "./style/main.scss"
import store from "./controller/store"
function App() {
  return (
    <Provider store={store}>
      <Pages />
    </Provider>
  );
}

export default App;
