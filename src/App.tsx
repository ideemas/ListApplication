import { useState } from "react";
import { List } from "./List";
import { DataSet1, DataSet2 } from "./mockedData";
import { StyledButton, StyledParagraph } from "./StyledComponents";

const initialListItems: ListItemKind[] = [];

function App() {
  const [listItems, setListItems] = useState(initialListItems);

  const setData1 = () => {
    setData(DataSet1);
  };

  const setData2 = () => {
    setData(DataSet2);
  };

  const setData = (Data: DataKind1[] | DataKind2[]) => {
    const newData = Data.map((item) => ({
      ...item,
      complete: false,
    }));
    setListItems(newData);
  };

  const toggleListItem = (selectedListItem: ListItemKind): void => {
    const newListItems = listItems.map((listItem) => {
      if (listItem === selectedListItem) {
        return {
          ...listItem,
          complete: !listItem.complete,
        };
      }
      return listItem;
    });
    setListItems(newListItems);
  };
  return (
    <>
      <h1>Data List Demo</h1>
      <StyledButton onClick={setData1}>SetData 1</StyledButton>
      <StyledButton onClick={setData2}>SetData 2</StyledButton>
      <StyledParagraph>
        {listItems.map((item, index) => (item.complete ? index : undefined))}
      </StyledParagraph>
      <List listItems={listItems} toggleListItem={toggleListItem} />
    </>
  );
}

export default App;
