import { describe, it } from 'vitest';
import DayOfWeekSelector from '@components/atoms/DayOfWeekSelector';
import { render, screen, userEvent } from '@test-utils';

describe('DayOfWeekSelectorTest', () => {
    it('初期値は日曜日である', async () => {
        render(<DayOfWeekSelector onChange={() => { }} />);

        expect(screen.getByRole('button')).toHaveTextContent('日');
    });

    describe('クリックしたとき', () => {
        it('全ての曜日が表示される', async () => {
            render(<DayOfWeekSelector onChange={() => { }} />);
            const button = screen.getByRole('button');

            await userEvent.click(button);

            const listbox = await screen.findByRole('listbox');
            expect(listbox).toHaveTextContent('日');
            expect(listbox).toHaveTextContent('月');
            expect(listbox).toHaveTextContent('火');
            expect(listbox).toHaveTextContent('水');
            expect(listbox).toHaveTextContent('木');
            expect(listbox).toHaveTextContent('金');
            expect(listbox).toHaveTextContent('土');
        });

        it('値を選択すると、選択した値のみが表示される', async () => {
            render(<DayOfWeekSelector onChange={() => { }} />);
            const element = screen.getByRole('button');

            await userEvent.click(element);
            await userEvent.selectOptions(screen.getByRole('listbox'), screen.getByText('木'));

            const listbox = screen.getByRole('button');
            expect(listbox).not.toHaveTextContent('日');
            expect(listbox).not.toHaveTextContent('月');
            expect(listbox).not.toHaveTextContent('火');
            expect(listbox).not.toHaveTextContent('水');
            expect(listbox).toHaveTextContent('木');
            expect(listbox).not.toHaveTextContent('金');
            expect(listbox).not.toHaveTextContent('土');
        });
    });
});
