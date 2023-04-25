import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import AddIcon from "@mui/icons-material/Add";
import { ListItem, TextField } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import { useState } from 'react';

export default function WorkSpace() {
  const [items, setItems] = useState<null | HTMLElement>(null);
  const AddItem = (event: React.MouseEvent<HTMLButtonElement>) => {
    setItems(event.currentTarget);
  };
  const CloseItem = () => {
    setItems(null);
  };

  const [text, setText] = useState('');
  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setText(event.target.value);
  }

  const [addcard, setAddCard] = useState(false);

  return (
    <div className='m-4'>
      <Button
      sx={{width: '288px', justifyContent: 'start', boxSizing: 'border-box'}}
      className='!bg-opacity-30 !text-white !bg-slate-50'
        id="addtext-button"
        color='inherit'
        aria-controls={items ? 'item-text' : undefined}
        aria-haspopup="true"
        aria-expanded={items ? 'true' : undefined}
        onClick={AddItem}
      >
        <AddIcon />
        Text another list
      </Button>
      <Menu
      sx={{ position: 'absolute', top: '-36px'}}
        id="item-text"
        anchorEl={items}
        open={!!items}
        MenuListProps={{
          'aria-labelledby': 'addtext-button',
        }}
      >
        <div className='max-w-none w-72'>
        <TextField sx={{ width: '288px', paddingX: '8px'}} onChange={handleChange} value={text} placeholder='Enter title list..' />
        
        <div className='flex cursor-pointer items-center mt-2 ml-2'>
          <Button variant='contained' 
          sx={{paddingY: '4px', paddingX: '12px', marginRight: '8px'}}
          onClick={() => setAddCard(!addcard)}
          id='items-list'
          aria-controls={addcard ? 'card-list' : undefined}
          aria-haspopup="true"
          aria-expanded={addcard ? 'true' : undefined}
          >Add Item</Button>

          <div onClick={CloseItem}><CloseIcon  /></div>
        </div>
        </div>
      </Menu>

      <ListItem />
    </div>
  );
}
