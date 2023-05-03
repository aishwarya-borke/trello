import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddCardIcon from "@mui/icons-material/AddCard";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import FormControlUnstyled from "@mui/base/FormControlUnstyled";
import { TextField } from "@mui/material";
import ListItems from "./ListItems";

// interface props {
//   title: string;
// }

interface cardbox {
  listcard: { list: string }[];
}

export default function Cards(props: { title: string }) {
  const [handlecard, setHandleCard] = useState(false);
  const cardHandler = () => {
    setHandleCard(true);
  };
  const [title, setTitle] = useState("");
  const [titlelist, setTitleList] = useState<cardbox[]>([]);

  const buttonClick = () => {
    if (title.trim().length !== 0) {
      setTitleList([...titlelist, { listcard: [{ list: title }] }]);
      setTitle("");
    }
  };

  return (
    <div className="bg-white w-72 rounded-xl p-2 mx-2 h-full">
      <div className="flex items-center mx-2 justify-between">
        <textarea className="resize-none h-6">{props.title}</textarea>
        <IconButton aria-label="Example">
          <MoreHorizIcon />
        </IconButton>
      </div>

      <div
        onDragOver={(e: any) => {
          e.preventDefault();
        }}
        onDrop={(e) => {
          e.preventDefault();
          const text = e.dataTransfer.getData("text/plain");
          const draggable = document.getElementById(text) as HTMLElement;
          e.currentTarget.appendChild(draggable);
          draggable?.classList.remove("hide");
        }}
      >
        {titlelist.map((titlelist) => (
          <ListItems listcard={titlelist.listcard} />
        ))}
      </div>

      {!handlecard && (
        <div className={`flex items-center justify-between`}>
          <Button onClick={cardHandler}>
            <AddIcon />
            Add a Card
          </Button>
          <AddCardIcon fontSize="small" className="mr-4" />
        </div>
      )}

      {handlecard && (
        <div>
          <FormControlUnstyled className="max-w-none">
            <TextField
              sx={{ paddingX: "8px", width: "272px" }}
              id="getText"
              placeholder="Enter a title for this card..."
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <div className="flex justify-between mr-2">
              <div className="flex items-center">
                <Button
                  variant="contained"
                  sx={{
                    paddingY: "4px",
                    paddingX: "12px",
                    marginX: "8px",
                    marginTop: "8px",
                  }}
                  id="items-list"
                  onClick={buttonClick}
                >
                  Add card
                </Button>

                <div
                  onClick={() => {
                    setHandleCard(false);
                  }}
                  className="inline cursor-pointer mt-2"
                >
                  <CloseIcon />
                </div>
              </div>

              <IconButton aria-label="Example">
                <MoreHorizIcon />
              </IconButton>
            </div>
          </FormControlUnstyled>
        </div>
      )}
    </div>
  );
}
