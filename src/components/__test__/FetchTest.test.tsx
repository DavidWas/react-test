import React from 'react';
import { render, screen } from '@testing-library/react';
import axios from "axios";
import FetchTest from "../FetchTest";
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

test("can mock api", async () => {
   const response = {data: [{userId:1, title: "lalala"}]};
   mockedAxios.get.mockResolvedValueOnce(response);
   render(<FetchTest/>);
   const itemElement = await screen.findByText("lalala");
   expect(itemElement).toBeInTheDocument();
});