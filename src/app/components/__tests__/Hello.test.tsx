import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Hello } from '../Hello';

// サンプル用テストコード

describe('HelloTest', () => {
    test('renders Hello component', () => {
        render(<Hello />);

        expect(screen.getByText('Hello World!!!')).toBeInTheDocument();
        expect(screen.getByText('count: 0')).toBeInTheDocument();
    });

    test('count should increase by 1 when button is clicked', () => {
        render(<Hello />);

        userEvent.click(screen.getByRole('button'));
        expect(screen.getByText(`count: ${1}`)).toBeInTheDocument();

        userEvent.click(screen.getByRole('button'));
        expect(screen.getByText(`count: ${2}`)).toBeInTheDocument();
    });
});
