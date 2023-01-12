import renderer from "react-test-renderer";
import { QueryClient, QueryClientProvider } from "react-query";
import CustomizedSnackbars from "src/component/message";

const queryClient = new QueryClient();
describe("<CustomizedSnackbars  />", () => {
  it("Should render correctly", () => {
    const component = renderer.create(
      <QueryClientProvider client={queryClient}>
        <CustomizedSnackbars />
      </QueryClientProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
