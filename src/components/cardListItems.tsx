import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import AddIcon from "@mui/icons-material/Add";
import { TextField } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";

export default function WorkSpace() {
  const [state, setState] = React.useState<null | HTMLElement>(null);
  const open = Boolean(state);
  const AddItem = (event: React.MouseEvent<HTMLButtonElement>) => {
    setState(event.currentTarget);
  };
  const CloseItem = () => {
    setState(null);
  };

  return (
    <div>
      <Button
      className='!bg-opacity-30 !text-white !bg-slate-50'
        id="basic-button"
        color='inherit'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={AddItem}
      >
        <AddIcon />
        Text another list
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={state}
        open={open}
        onClose={CloseItem}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <TextField placeholder='Enter title list..' />
        <div className='flex'>
          <Button>Add Item</Button>
          <div><CloseIcon  /></div>
        </div>
      </Menu>
    </div>
  );
}
