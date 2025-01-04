import { useListContext, useListController } from "react-admin";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { FlexBox } from "../flex-box";
import { TooltipIconButton } from "../tooltip-icon-button";
import { usePalette } from "@/common/hooks";

export const Pagination = () => {
  const { bgcolor, primaryPalette, getPaletteColorValue } = usePalette();
  const { page, hasNextPage, hasPreviousPage } = useListContext();
  const { setPage } = useListController();

  const doNextPage = () => {
    setPage(page + 1);
  };

  const doPrevPage = () => {
    setPage(page - 1);
  };

  const activeBgColor = getPaletteColorValue(primaryPalette, 900);

  return (
    <FlexBox sx={{ gap: 1, justifyContent: "end", bgcolor, p: 1 }}>
      <TooltipIconButton
        size="small"
        title="Previous"
        disabled={!hasPreviousPage}
        onClick={doPrevPage}
        sx={{
          "& .MuiSvgIcon-root": { fontSize: "17px" },
          "px": 2,
          "borderRadius": "10px",
        }}
      >
        <ArrowBackIos />
      </TooltipIconButton>
      {hasPreviousPage && (
        <TooltipIconButton
          size="small"
          title={(page - 1).toString()}
          sx={{ fontSize: "13px", py: 0.6, px: 2, borderRadius: "8px" }}
          onClick={doPrevPage}
        >
          {page - 1}
        </TooltipIconButton>
      )}
      <TooltipIconButton
        size="small"
        title={page.toString()}
        sx={{
          fontSize: "13px",
          py: 0.6,
          px: 2,
          bgcolor: activeBgColor,
          color: "white",
          borderRadius: "8px",
        }}
      >
        {page}
      </TooltipIconButton>
      {hasNextPage && (
        <TooltipIconButton
          size="small"
          title={(page + 1).toString()}
          sx={{ fontSize: "13px", py: 0.6, px: 2, borderRadius: "8px" }}
          onClick={doNextPage}
        >
          {page + 1}
        </TooltipIconButton>
      )}
      <TooltipIconButton
        title="Next"
        disabled={!hasNextPage}
        onClick={doNextPage}
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
