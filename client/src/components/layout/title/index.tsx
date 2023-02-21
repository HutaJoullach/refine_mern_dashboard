import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          // <img src="/refine-collapsed.svg" alt="Refine" width="28px" />
          <FlutterDashIcon
            sx={{
              color: "#FCFCFC",
              height: "60px",
              width: "60px",
              marginTop: "1px",
            }}
          />
        ) : (
          // <img src="/refine.svg" alt="Refine" width="140px" />
          <>
            <FlutterDashIcon
              sx={{
                color: "#FCFCFC",
                height: "60px",
                width: "60px",
                marginTop: "15px",
              }}
            />
            <div>
              <p>refine_mern_dashboard</p>
            </div>
          </>
        )}
      </Link>
    </Button>
  );
};
