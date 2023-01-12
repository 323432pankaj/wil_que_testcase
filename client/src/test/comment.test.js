import renderer from "react-test-renderer";
import { QueryClient, QueryClientProvider } from "react-query";
import Comment from "src/component/comment";

const queryClient = new QueryClient();
describe("<Comment />", () => {
  it("Should render correctly", () => {
    const component = renderer.create(
      <QueryClientProvider client={queryClient}>
        <Comment />
      </QueryClientProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
