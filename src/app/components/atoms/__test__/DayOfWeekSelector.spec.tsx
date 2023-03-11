import React from 'react';
import { render, screen, userEvent } from '../../../../test/test-utils';
import DayOfWeekSelector from '../DayOfWeekSelector';

describe('DayOfWeekSelectorTest', () => {
    it('選択値が表示される', async () => {
        render(<DayOfWeekSelector onChange={() => { }} />);
        const element = screen.getByRole('button');
        if (element === null) {
            throw new Error('Element is not found.')
        }
    
        userEvent.click(element);
        userEvent.click(await screen.findByText('木'));
        
        const result = await screen.findByRole('button');
        expect(result).not.toHaveTextContent('日');
        expect(result).not.toHaveTextContent('月');
        expect(result).not.toHaveTextContent('火');
        expect(result).not.toHaveTextContent('水');
        expect(result).toHaveTextContent('木');
        expect(result).not.toHaveTextContent('金');
        expect(result).not.toHaveTextContent('土');
    });
    
    it('選択値を取得できる', async () => {
        let selectedValue = -1;
        render(<DayOfWeekSelector onChange={(v) => { selectedValue = v }} />);
        const element = screen.getByRole('button');
        if (element === null) {
            throw new Error('Element is not found.')
        }
    
        userEvent.click(element);
        userEvent.click(await screen.findByText('水'));
        
        expect(selectedValue).toBe(3);
    });
});
