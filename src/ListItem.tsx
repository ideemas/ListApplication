import React from "react";
import { StyledListItem } from "./StyledComponents";

interface Props {
  listItem: ListItemKind;
  toggleListItem: ToggleListItem;
}

export const ListItem: React.FC<Props> = ({ listItem, toggleListItem }) => {
  return (
    <StyledListItem>
      <label>
        <input
          type="checkbox"
          checked={listItem.complete}
          onChange={() => {
            toggleListItem(listItem);
          }}
        />
        <span className="checkmark"></span>
      </label>
      <div>
        <h4>{listItem.title || listItem.name}</h4>
        <p>{listItem.description}</p>
        <p>{listItem.address}</p>
      </div>
    </StyledListItem>
  );
};
