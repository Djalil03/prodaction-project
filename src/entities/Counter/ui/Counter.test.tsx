import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    test('with only first param', () => {
        componentRender(<Counter />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
});
