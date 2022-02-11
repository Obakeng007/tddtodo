import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event'
import fetchMock from 'jest-fetch-mock'
import Mockdata from './components/Mockdata';


beforeEach(() => {
    fetchMock.once(JSON.stringify(Mockdata));
  });


/** 
test('Test rendering of first element Mockdata.', () => {
    render(<App todos={Mockdata}/>);

    
})

*/


test ("Add a new TODO Item", async() => {
    fetchMock.once(
        JSON.stringify({
            userId: 3,
            id: Math.floor(Math.random() * 100) + 1,
            title: 'Do math homework',
            completed: false,
        })
    )
    render(<App/>);

     
    const waitForElementToBeRemoved = await screen.getByText(/loading/i);
    expect(waitForElementToBeRemoved).toBeInTheDocument();

    userEvent.type(screen.getByRole('textbox'), 'Do math homework');
    userEvent.click(screen.getByText(/Add new todo/i));

    const waitForSavingToBeRemoved = await screen.getByText(/saving/i);
    expect( waitForSavingToBeRemoved).toBeInTheDocument();

    
})

