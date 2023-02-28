import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <GraphicEqIcon
            sx={{
              color: "#FCFCFC",
              height: "30px",
              width: "30px",
              marginTop: "1px",
            }}
          />
        ) : (
          <>
            <GraphicEqIcon
              sx={{
                color: "#FCFCFC",
                height: "50px",
                width: "50px",
                marginTop: "15px",
              }}
            />
          </>
        )}
      </Link>
    </Button>
  );
};
