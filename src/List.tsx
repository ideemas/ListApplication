import React from "react";
import { ListItem } from "./ListItem";
import { StyledUnorderedList } from "./StyledComponents";

interface Props {
  listItems: ListItemKind[];
  toggleListItem: ToggleListItem;
}

export const List: React.FC<Props> = ({ listItems, toggleListItem }) => {
  return (
    <StyledUnorderedList>
      {listItems.map((item, index) => (
        <ListItem key={index} listItem={item} toggleListItem={toggleListItem} />
      ))}
    </StyledUnorderedList>
  );
};
