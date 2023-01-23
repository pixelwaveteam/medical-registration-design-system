import { styled } from "../../styles";

export const StyledAlertDialogStructureOverlay = styled("div", {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 20,
  backgroundColor: "$gray-900"
});

export const StyledAlertDialogStructurePanel = styled("section", {
  position: "fixed",
  zIndex: 50,
  width: "95vw",
  maxWidth: "28rem",
  borderRadius: "$roundedMd",
  padding: "$4",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontFamily: "$default",
  backgroundColor: "White",
  focus: {
      outline: "none",
      "&:visible": {
        boxShadow: "0px 0px 0px 2px rgba($colors$DEFAULT, 0.75)",
      }
  },
  "@md": {  
    width: "100%"
  }
})

export const AlertDialogTitle = styled("h2", {
  fontSize: "$textLg",
  fontWeight: "$medium",
  color: "$gray-800",
})

export const StyledAlertDialogDescription = styled("div", {
  marginTop: "$2",
  fontSize: "$textSm",
  fontWeight: "$regular",
  color: "$gray-600",
})