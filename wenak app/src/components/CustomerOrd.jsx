import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import FiberNewIcon from "@material-ui/icons/FiberNew";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import RestoreIcon from "@material-ui/icons/Restore";
import HelpIcon from "@material-ui/icons/Help";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import NestedGrid from "./NewOrder";
import NestedCustom from "./NewCustomet_order";
import NestedCurrent from "./CurrentOrders";
import { textAlign } from "@material-ui/system";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    color: "red",
    textAlign: "center",
    indicatorColor: "Primary",
    padding: "120px 420px 420px 420px"
  },
  iconTab: {
    color: "#fafafa",
    textAlign: "center"
  },
  tab: {
    indicatorColor: "#ffca28",
    fontSize: "14px",
    textColor: "#212121",
    marginLeft: "100px",
    // marginRight: "90px",
    textAlign: "center",
    // paddingLeft: "20px",
    width: "1000px"
  },
  navcolor: {
    backgroundColor: "#ffc400"
  }
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="relative" color="default" backgroundColor=" #d4e157">
        <div className={classes.navcolor}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
          >
            <Tab
              className={classes.tab}
              label="New"
              icon={
                <FiberNewIcon fontSize="large" className={classes.iconTab} />
              }
              {...a11yProps(0)}
            />
            <Tab
              className={classes.tab}
              label="OnWay"
              icon={
                <DirectionsBikeIcon
                  fontSize="large"
                  className={classes.iconTab}
                />
              }
              {...a11yProps(1)}
            />
            <Tab
              className={classes.tab}
              label="History"
              icon={
                <RestoreIcon fontSize="large" className={classes.iconTab} />
              }
              {...a11yProps(2)}
            />
          </Tabs>
        </div>
      </AppBar>
      <TabPanel value={value} index={0}>
        {/* new Orders form customers pending status */}
        <NestedCustom font />
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* <NestedGrid /> */}
        ola Mhanna
      </TabPanel>
      <TabPanel value={value} index={2}>
        <NestedCurrent />
      </TabPanel>
    </div>
  );
}
