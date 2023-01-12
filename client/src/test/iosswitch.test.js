import renderer from "react-test-renderer";
import { QueryClient } from "react-query";
import IOSSwitch from "src/component/iosswitch";

const queryClient = new QueryClient();
describe("<Comment />", () => {
  it("Should render correctly", () => {
    const component = renderer.create(<IOSSwitch />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
