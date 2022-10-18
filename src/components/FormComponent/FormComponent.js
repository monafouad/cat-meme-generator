import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import "./FormComponent.scss";
import {
  CAT_GENERATOR_BTN_TEXT,
  CAT_GENERATOR_SUBTITLE,
  CAT_GENERATOR_TITLE,
  CAT_FILTER_DROPDOWN_TEXT,
  CAT_TEXT_PLACEHOLDER,
  useStyles,
} from "../../constants/catConstants";

function FormComponent(props) {
  const catClasses = useStyles();
  return (
    <div className="catGenerator">
      <Box
        component="form"
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
        noValidate
        onSubmit={props.handleSubmit}
      >
        <Grid container spacing={1}>
          <Grid item sm={12} md={5}>
            <h1 className="catGenerator_title">{CAT_GENERATOR_TITLE}</h1>
            <p className="catGenerator_subtitle">{CAT_GENERATOR_SUBTITLE}</p>
          </Grid>
          <Grid
            sm
            item
            sx={{ mr: 0, display: "flex", justifyContent: "right" }}
          >
            <div className={catClasses.gridCols}>
              <FormControl variant="standard" sx={{ minWidth: 220, mr: 0 }}>
                <InputLabel>{CAT_FILTER_DROPDOWN_TEXT}</InputLabel>
                <Select
                  value={props.data.tag}
                  name="tag"
                  variant="standard"
                  onChange={props.handleChange}
                >
                  {props.data.tags.map((tag, i) => (
                    <MenuItem value={tag} key={i}>
                      {tag}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </Grid>
          <Grid
            sm
            item
            sx={{ mr: 0, display: "flex", justifyContent: "right" }}
          >
            <div className={catClasses.gridCols}>
              <FormControl variant="standard" sx={{ minWidth: 220, mr: 0 }}>
                <TextField
                  id="standard-basic"
                  variant="standard"
                  label={CAT_TEXT_PLACEHOLDER}
                  name="text"
                  value={props.data.text}
                  onChange={props.handleChange}
                />
              </FormControl>
            </div>
          </Grid>
          <div className={catClasses.submitBtn}>
            <FormControl>
              <Button type="submit" variant="contained">
                {CAT_GENERATOR_BTN_TEXT}
              </Button>
            </FormControl>
          </div>
        </Grid>
      </Box>
    </div>
  );
}

export default FormComponent;
