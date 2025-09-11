"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";
import Popper from "@mui/material/Popper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import BasicMenu from "./BasicMenu";

export default function DashBoard() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const goToProfile = () => {
    handleClose();
    router.push("/profile");
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "dashboard-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>

      <Popper open={open} anchorEl={anchorEl} placement="bottom-start">
        <ClickAwayListener onClickAway={handleClose}>
          <div>
            <BasicMenu />
          </div>
        </ClickAwayListener>
      </Popper>
    </div>
  );
}
