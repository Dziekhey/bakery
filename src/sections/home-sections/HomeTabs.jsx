import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const HomeTabs = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <section>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                textColor="#353535"
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "#353535",
                  },
                }}
              >
                <Tab
                  label="Product Description"
                  value="1"
                  sx={{
                    width: "50%",
                    fontSize: "14px",
                    textTransform: "none",
                    p: 0,
                  }}
                />
                <Tab
                  label="Ingredients"
                  value="2"
                  sx={{
                    width: "50%",
                    fontSize: "14px",
                    textTransform: "none",
                    p: 0,
                  }}
                />
              </TabList>
            </Box>
            <TabPanel
              value="1"
              sx={{
                p: 0,
                "&.MuiTabPanel-root": {
                  fontFamily: "Josefin Sans",
                  fontSize: "14px",
                },
              }}
            >
              Our chocolate chip cookie dough is a delicious, timeless classic.
              It's our OG recipe, and always a fan favorite. Enjoy this
              chocolatey delight raw or baked into a soft, gooey cookie.
            </TabPanel>
            <TabPanel
              value="2"
              sx={{
                p: 0,
                "&.MuiTabPanel-root": {
                  fontFamily: "Josefin Sans",
                  fontSize: "14px",
                },
              }}
            >
              Our chocolate chip cookie dough is a delicious, timeless classic.
              It's our OG recipe, and always a fan favorite. Enjoy this
              chocolatey delight raw or baked into a soft, gooey cookie.
            </TabPanel>
          </TabContext>
        </Box>
      </section>
    </>
  );
};

export default HomeTabs;
