import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Player from './Player';

describe('Player', () => {
  it('renders player information and two buttons', () => {
    render(<Player name="Jane" score="10" />);

    const buttons = screen.getAllByRole('button');
    const name = screen.getByText(/jane/i);
    const score = screen.getByText(/10/i);

    expect(buttons).toHaveLength(2);
    expect(name).toBeInTheDocument();
    expect(score).toBeInTheDocument();
  });

  it('calls callbacks when increasing or decreasing score', () => {
    const decrementMock = jest.fn();
    const incrementMock = jest.fn();
    render(
      <Player
        name="John"
        score="5"
        onDecrementPlayerScore={decrementMock}
        onIncrementPlayerScore={incrementMock}
      />
    );

    const incrementButton = screen.getByRole('button', {
      name: /increment score/i,
    });
    const decrementButton = screen.getByRole('button', {
      name: /decrement score/i,
    });

    userEvent.click(incrementButton);
    userEvent.click(decrementButton);
    userEvent.click(decrementButton);
    userEvent.click(decrementButton);

    expect(incrementMock).toHaveBeenCalledTimes(1);
    expect(decrementMock).toHaveBeenCalledTimes(3);
  });
});
