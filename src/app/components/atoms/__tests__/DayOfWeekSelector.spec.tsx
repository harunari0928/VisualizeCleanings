import { render, screen, userEvent } from '@test-utils';
import { describe, it } from 'vitest';
import DayOfWeekSelector from '../DayOfWeekSelector';

describe('DayOfWeekSelectorTest', () => {
    it('初期値が日曜日であること', async () => {
        render(<DayOfWeekSelector onChange={() => { }} />);

        expect(screen.getByRole('button')).toHaveTextContent('日');
    });

    it('クリックすると曜日の選択肢が表示される', async () => {
        render(<DayOfWeekSelector onChange={() => { }} />);
        const button = screen.getByRole('button');
        if (button === null) {
            throw new Error('Element is not found.')
        }
    
        await userEvent.click(button);

        const options = screen.getAllByRole('option');
        expect(options[0]).toHaveTextContent('日');
        expect(options[1]).toHaveTextContent('月');
        expect(options[2]).toHaveTextContent('火');
        expect(options[3]).toHaveTextContent('水');
        expect(options[4]).toHaveTextContent('木');
        expect(options[5]).toHaveTextContent('金');
        expect(options[6]).toHaveTextContent('土');
    });

    it('値選択後、選択した値のみが表示される', async () => {
        render(<DayOfWeekSelector onChange={() => { }} />);
        const element = screen.getByRole('button');
        if (element === null) {
            throw new Error('Element is not found.')
        }
    
        await userEvent.click(element);
        await userEvent.click(await screen.findByText('木'));
        
        const result = await screen.findByRole('button');
        expect(result).not.toHaveTextContent('日');
        expect(result).not.toHaveTextContent('月');
        expect(result).not.toHaveTextContent('火');
        expect(result).not.toHaveTextContent('水');
        expect(result).toHaveTextContent('木');
        expect(result).not.toHaveTextContent('金');
        expect(result).not.toHaveTextContent('土');
    });
    
    it('選択した値を取得できる', async () => {
        let selectedValue = -1;
        render(<DayOfWeekSelector onChange={(v) => { selectedValue = v }} />);
        const button = screen.getByRole('button');
        if (button === null) {
            throw new Error('Element is not found.')
        }
    
        await userEvent.click(button);
        await userEvent.click(screen.getByText('水'));
        
        expect(selectedValue).toBe(3);
    });
});
