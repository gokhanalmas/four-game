import { render, screen, waitFor, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { setModal } from './store/modalSlice';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const renderComponent = () => {
  return render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
};

jest.mock('../src/helpers/getWorker.ts', () => ({
  getWebWorker: jest.fn(),
}));

describe('uygulama bileşeni testi', () => {
  test('ana menü modali açık ise render edilmelidir', async () => {
    renderComponent();

    act(() => {
      store.dispatch(setModal({ modal: 'mainMenu', status: true }));
    });
    let modal;
    await waitFor(() => {
      modal = screen.getByText('Zorluk Seçin');
    });
    expect(modal).toBeInTheDocument();
    act(() => {
      store.dispatch(setModal({ modal: 'mainMenu', status: false }));
    });
  });
  
  test('oyun menü modali açık ise render edilmelidir', async () => {
    renderComponent();
    act(() => {
      store.dispatch(setModal({ modal: 'gameMenu', status: true }));
    });
    let modal;
    await waitFor(() => {
      modal = screen.getByText('duraklat');
    });
    expect(modal).toBeInTheDocument();
    act(() => {
      store.dispatch(setModal({ modal: 'gameMenu', status: false }));
    });
  });
});
