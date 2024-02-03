import { render, waitFor, screen } from "@testing-library/react";
import { ErrorPage } from "./ErrorPage";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

describe('ErrorPage', () => {


    it("render element", async() => {
        const routes = [
          {
            path: "/errorpath",
            element:<div>Error Element</div>,
            errorElement:<ErrorPage />,
          },
        ];
        const router = createMemoryRouter(routes, {
            initialEntries: ["/", "/error"],
            initialIndex: 1,
          });
        render(<RouterProvider router={router} />);
        await waitFor(() => {
            expect(screen.getByText("Oops!")).toBeInTheDocument()
        });
    })
});