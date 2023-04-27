import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { AvatarGroup } from "@mui/material";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import WorkSpace from "./workspace";
import UpgradeView from "./upgradeView";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import PowerUps from "./powerups";
import Automation from "./automation";
import ShareDialogBox from "./shareDialogbox";
import Filter from "./filter";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function Navbar() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className="!bg-transparent !backdrop-blur" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters >
          <Box className="flex">
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Simple Project Board
            </Typography>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Simple Project Board
            </Typography>
            <div>
              <StarBorderIcon />
            </div>
          </Box>

            <Box sx={{ flexGrow: 1, display: "flex" }}>
              <WorkSpace />
              <Button
                color="inherit"
                variant="contained"
                className="!text-black !mr-2"
              >
                <SortRoundedIcon />
                Board
              </Button>
              <UpgradeView />
            </Box>

          <div className="flex">
            <PowerUps />
            <Automation />
          </div>

          <div className="flex">
            <Filter />
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings" className="cursor-pointer">
                <AvatarGroup max={4}>
                  <Avatar
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0 }}
                    alt="Remy Sharp"
                    src="/static/images/avatar/2.jpg"
                  />
                  <Avatar
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0 }}
                    alt="Remy Sharp"
                    src="/static/images/avatar/2.jpg"
                  />
                  <Avatar
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0 }}
                    alt="Remy Sharp"
                    src="/static/images/avatar/2.jpg"
                  />
                </AvatarGroup>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <ShareDialogBox />
            <div>
              <MoreHorizOutlinedIcon />
            </div>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
