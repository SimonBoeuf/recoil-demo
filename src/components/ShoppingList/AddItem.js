import {TextField, Button} from '@material-ui/core'
import { useState } from 'react';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { addItem } from '../../api/shopping-list'
import { shoppingListState } from '../../state/atoms/shoppingListState';
import { shoppingListValueState } from '../../state/selectors/shoppingListValueState';

function AddItem() {
  const [item, setItem] = useState("")
  const setShoppingList = useSetRecoilState(shoppingListState);
  const resetList = useResetRecoilState(shoppingListState);
  const numberOfItem = useRecoilValue(shoppingListValueState)

  const handleAdd = async() => {
    const newItem = await addItem({name: item})
    setShoppingList((shoppingList) => [...shoppingList,newItem])
    setItem("")
  }

  const handleDelete = async() => {
    alert('TO DO')
    resetList()
  }

  return (
    <div>
     <TextField id="filled-basic" label="Item" variant="filled" value={item} onChange={(e) => setItem(e.target.value)}/>
     <Button variant="contained" color="primary" onClick={() => handleAdd()}>Add</Button>
     <Button variant="contained" color="secondary" onClick={handleDelete}>Delete all</Button>
     <p>Number of elements: {numberOfItem}</p>
    </div>
  );
}

export default AddItem;
