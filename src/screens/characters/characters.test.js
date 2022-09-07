import { render, screen } from "@testing-library/react"
import { QueryClient, QueryClientProvider } from "react-query";
import Characters from "./characters"

const queryClient = new QueryClient();

test('characters rendering properly', () => {
  render(
    <QueryClientProvider client={queryClient}>
      <Characters />
    </QueryClientProvider>
  );

  // const loadingElement = screen.getByTestId("loadingTestId")
  // expect(loadingElement).toBeVisible();


})
