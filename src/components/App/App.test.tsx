import { renderWithRouter } from '../../helpers/testing/renderWithRouter';
import App from './App';


test('renders app', () => {
  renderWithRouter(<App />);
});
