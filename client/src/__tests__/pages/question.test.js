import renderer from "react-test-renderer";
import { QueryClient, QueryClientProvider } from "react-query";
import Question from "src/pages/questions";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const queryClient = new QueryClient();
describe("<Question />", () => {
  it("Should render correctly", () => {
    const component = renderer.create(
      <QueryClientProvider client={queryClient}>
        <Question />
      </QueryClientProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Check Button render", () => {
    const wrapper = shallow(
      <QueryClientProvider client={queryClient}>
        <Question />
      </QueryClientProvider>
    );
    expect(wrapper.find({ variant: "contained" })).toBeTruthy();
  });

  it("Check Button render", () => {
    const wrapper = shallow(
      <QueryClientProvider client={queryClient}>
        <Question />
      </QueryClientProvider>
    );
    const value = wrapper.find({ variant: "contained" });
    expect(value).toBeTruthy();
  });
});
