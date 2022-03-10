import App from './App';
import { renderTestApp } from '../../helpers/testing/renderTestApp';


describe('APP', () => {
  test('renders app', () => {
    renderTestApp(<App />);
  });
});
