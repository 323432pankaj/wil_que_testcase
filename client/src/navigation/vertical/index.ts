// ** Icon imports
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import HelpIcon from "@material-ui/icons/Help";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import FormatColorTextIcon from "@material-ui/icons/FormatColorText";
import ScheduleIcon from "@material-ui/icons/Schedule";
import DataObjectIcon from "@mui/icons-material/DataObject";
// ** Type import
import { VerticalNavItemsType } from "src/@core/layouts/types";

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: "Dashboard",
      icon: HomeIcon,
      path: "/dashboard",
    },
    {
      title: "Users",
      icon: GroupIcon,
      path: "/users",
    },
    {
      title: "Tags ",
      icon: LocalOfferIcon,
      path: "/tags",
    },

    {
      title: "My Questions ",
      icon: HelpIcon,
      path: "/myquestions",
    },
    {
      sectionTitle: "Developer tools",
    },
    {
      title: "Date-time converter ",
      icon: ScheduleIcon,
      path: "/date-time-converter",
    },

    {
      title: "Lorem ipsum generator ",
      icon: TextFieldsIcon,
      path: "/lorem-ipsum-generator",
    },

    {
      icon: FormatColorTextIcon,
      title: "Color-Picker",
      path: "/colorpicker",
    },
    {
      icon: FormatColorTextIcon,
      title: "Device-Information",
      path: "/deviceinformation",
    },
    {
      icon: DataObjectIcon,
      title: "JSON Format",
      path: "/jsonformat",
    },
  ];
};

export default navigation;
