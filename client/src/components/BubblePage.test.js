import React from "react";
import { render, screen, fireEvent, waitFor, act  } from "@testing-library/react";
import BubblePage from "./BubblePage";
//import { useHistory } from "react-router-dom";

import { getColorsFetch as mockGetColorsFetch} from '../Util/getColorsFetch';
jest.mock('../Util/getColorsFetch');

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));


const colorsData = {
  data: [
    {
      code: {
        hex: "#99ddbc"
      },
      color: 'limegreen',
      id: 2
    }
  ]
}

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  mockGetColorsFetch.mockResolvedValueOnce(colorsData);
  const { rerender } = render(<BubblePage />);
  screen.debug();
  await act(async () => {
    await rerender(<BubblePage />);
    const color = screen.getAllByText(/limegreen/i);
    expect(color).not.toEqual(null);
    screen.debug();
  });

});
