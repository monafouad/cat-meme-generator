import { makeStyles } from "@material-ui/styles";

//URL
export const CAT_REQUEST_URL_MAIN = "https://cataas.com/cat/";
export const CAT_REQUEST_URL_CUTE = "https://cataas.com/cat/cute";
export const CAT_REQUEST_URL_TAGS = "https://cataas.com/api/tags";
export const CAT_REQUEST_URL_SAYS = "https://cataas.com/cat/says";

//Texts
export const CAT_GENERATOR_BTN_TEXT = "Create meme";
export const CAT_GENERATOR_TITLE = "Cat meme Generator";
export const CAT_GENERATOR_SUBTITLE =
  "You could use this generator to create your own cat meme!";
export const CAT_FILTER_DROPDOWN_TEXT = "Filter on tag";
export const CAT_TEXT_PLACEHOLDER = "Custom Text";

export const useStyles = makeStyles({
  gridCols: {
    paddingLeft: "20px",
    width: "220px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  submitBtn: {
    display: "flex",
    justifyContent: "flex-end",
    maxWidth: "140",
    paddingLeft: "36px",
    alignItems: "center",
  },
});
