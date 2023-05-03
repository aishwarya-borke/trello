import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import AddIcon from "@mui/icons-material/Add";
import { TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import FormControlUnstyled from "@mui/base/FormControlUnstyled";
import ListItem from "./ListItem";

interface CardItems {
  heading: string;
}


export default function WorkSpace() {
  const [items, setItems] = useState<null | HTMLElement>(null);
  const AddItem = (event: React.MouseEvent<HTMLButtonElement>) => {
    setItems(event.currentTarget);
  };
  const CloseItem = () => {
    setItems(null);
  };

  const [text, setText] = useState("");
  const [card, setCard] = useState<CardItems[]>([]);

  const handleClick = () => {
    if (text.length !== 0) { 
      setCard([...card,{heading: text}]);
      setText('');
    }
  };

  return (
    <div className="m-4 flex overflow-x-scroll">
      {card.map((card) => (
        <ListItem title={card.heading} />
      ))}
      <div>
        <Button
          sx={{
            width: "288px",
            justifyContent: "start",
            boxSizing: "border-box",
          }}
          className="!bg-opacity-30 !text-white !bg-slate-50"
          id="addtext-button"
          color="inherit"
          aria-controls={items ? "item-text" : undefined}
          aria-haspopup="true"
          aria-expanded={items ? "true" : undefined}
          onClick={AddItem}
        >
          <AddIcon />
          Text another list
        </Button>
      </div>

      <div>
        <Menu
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          id="item-text"
          anchorEl={items}
          open={!!items}
          MenuListProps={{
            "aria-labelledby": "addtext-button",
          }}
        >
          <FormControlUnstyled className="max-w-none w-72">
            <TextField
              sx={{ width: "288px", paddingX: "8px" }}
              onChange={(e) => setText(e.target.value)}
              id="getText"
              value={text}
              placeholder="Enter title list.."
            />

            <Button
              variant="contained"
              sx={{
                paddingY: "4px",
                paddingX: "12px",
                marginX: "8px",
                marginTop: "8px",
              }}
              id="items-list"
              onClick={handleClick}
            >
              Add Item
            </Button>

            <div onClick={CloseItem} className="inline cursor-pointer mt-2">
              <CloseIcon />
            </div>
          </FormControlUnstyled>
        </Menu>
      </div>
    </div>
  );
}