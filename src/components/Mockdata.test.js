import { render, screen } from '@testing-library/react';
import Mockdata from './Mockdata';
import Todo from './Todo'
import '@testing-library/jest-dom'



test ('Check for TODOs',() => {
    render(<Todo todos = {Mockdata}/>);

    //Mockdata.forEach((d) => expect(screen.getByText(d.title)).toBeInTheDocument());
});

