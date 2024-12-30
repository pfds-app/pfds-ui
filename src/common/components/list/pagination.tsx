import { useListContext, useListController } from "react-admin";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { FlexBox } from "../flex-box";
import { TooltipIconButton } from "../tooltip-icon-button";
import { usePalette } from "@/common/hooks";

export const Pagination = () => {
  const { bgcolor, palette } = usePalette();
  const { page } = useListContext();
  const { setPage } = useListController();

  return (
    <FlexBox sx={{ gap: 1, justifyContent: "end", bgcolor, p: 1 }}>
      <TooltipIconButton
        size="small"
        title="Previous"
        onClick={() => {
          setPage(page - 1);
        }}
        sx={{
          "& .MuiSvgIcon-root": { fontSize: "17px" },
          "px": 2,
          "borderRadius": "10px",
        }}
      >
        <ArrowBackIos />
      </TooltipIconButton>
      <TooltipIconButton
        size="small"
        title={(page - 1).toString()}
        sx={{ fontSize: "13px", py: 0.6, px: 2, borderRadius: "8px" }}
      >
        {page - 1}
      </TooltipIconButton>
      <TooltipIconButton
        size="small"
        title={page.toString()}
        sx={{
          fontSize: "13px",
          py: 0.6,
          px: 2,
          bgcolor: palette.primary.main,
          borderRadius: "8px",
        }}
      >
        {page}
      </TooltipIconButton>
      <TooltipIconButton
        size="small"
        title={(page + 1).toString()}
        sx={{ fontSize: "13px", py: 0.6, px: 2, borderRadius: "8px" }}
      >
        {page + 1}
      </TooltipIconButton>
      <TooltipIconButton
        title="Next"
        size="small"
        sx={{
          "& .MuiSvgIcon-root": { fontSize: "17px" },
          "px": 2,
          "borderRadius": "10px",
        }}
      >
        <ArrowForwardIos />
      </TooltipIconButton>
    </FlexBox>
  );
};
