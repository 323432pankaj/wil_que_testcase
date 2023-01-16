import renderer from "react-test-renderer";
import { QueryClient, QueryClientProvider } from "react-query";
import Answers from "src/pages/answers";

const queryClient = new QueryClient();
describe("Test Answers Component", () => {
  it("Should render correctly", () => {
    const component = renderer.create(
      <QueryClientProvider client={queryClient}>
        <Answers />
      </QueryClientProvider>
    );
    const query = null;
    component.expect(query).toBeNull();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
