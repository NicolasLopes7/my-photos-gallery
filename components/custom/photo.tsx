import { DownloadIcon, Share1Icon } from "@radix-ui/react-icons";
import { useState } from "react";
import { keyframes, styled } from "../../stitches.config";
import { Box } from "../primitives/box";

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const DownloadButton = styled(DownloadIcon, {
  position: "absolute",
  top: 10,
  right: 10,
  width: 32,
  height: 32,
  color: "$gray",
  padding: 3,
  borderRadius: 4,
  backgroundColor: "rgba(255,255,255)",
  cursor: "pointer",
  animation: `${fadeIn} 200ms`,

  "&:hover": {
    color: "$black",
  },
});

const ShareButton = styled(Share1Icon, {
  position: "absolute",
  top: 10,
  right: 20 + 32,
  width: 32,
  height: 32,
  color: "$gray",
  padding: 3,
  borderRadius: 4,
  backgroundColor: "rgba(255,255,255)",
  cursor: "pointer",

  animation: `${fadeIn} 200ms`,
  "&:hover": {
    color: "$black",
  },
});

type Props = { url: string };
export const Photo: React.FC<Props> = ({ url }) => {
  const [showActionButtons, setActionButtonsVisibility] = useState(false);

  const handleFocus = () => setActionButtonsVisibility(true);
  const handleUnfocus = () => setActionButtonsVisibility(false);
  return (
    <div>
      <Box
        css={{ position: "relative" }}
        onMouseEnter={handleFocus}
        onMouseLeave={handleUnfocus}
      >
        {showActionButtons && (
          <>
            <ShareButton />
            <DownloadButton />
          </>
        )}
        <img src={url} style={{ maxHeight: "400px" }} />
      </Box>
    </div>
  );
};
