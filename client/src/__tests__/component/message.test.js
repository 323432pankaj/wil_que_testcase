import renderer from "react-test-renderer";
import { QueryClient } from "react-query";
import CustomizedSnackbars from "src/component/message";

describe("<CustomizedSnackbars  />", () => {
  it("Should render correctly", async () => {
    const tree = renderer
      .create(
        <CustomizedSnackbars resetData={jest.fn()} severity={"success"} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
