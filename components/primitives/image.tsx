import { styled } from "../../stitches.config";

export const Image = styled("image", {
  display: "block",
  maxHeight: "500px",
  variants: {
    size: {
      third: { flex: 0.3 },
      half: { flex: 0.5 },
      full: { flex: 1 },
    },
  },
});
