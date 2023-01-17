import renderer from "react-test-renderer";
import { QueryClient, QueryClientProvider } from "react-query";
import AskQuestion from "src/pages/askquestion";

const queryClient = new QueryClient();
describe("Test Answers Component", () => {
  it("Should render correctly", () => {
    const component = renderer.create(
      <QueryClientProvider client={queryClient}>
        <AskQuestion />
      </QueryClientProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
