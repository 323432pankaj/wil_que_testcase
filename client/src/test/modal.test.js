import renderer from "react-test-renderer";
import { QueryClient, QueryClientProvider } from "react-query";
import BasicModal from "src/component/modal";

const queryClient = new QueryClient();
describe("<BasicModal />", () => {
  it("Should render correctly", () => {
    const component = renderer.create(
      <QueryClientProvider client={queryClient}>
        <BasicModal />
      </QueryClientProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
