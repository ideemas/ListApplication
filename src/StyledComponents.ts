import styled from "styled-components";
export const StyledButton = styled.button`
border: 1px solid #f00;
border-radius: 5px;
margin .5em;
color: #f00;
background: none;
padding: 0.5em;
&:hover {
  background: #888;
  color: #fff;
  border: 1px solid #888;
}
`;

export const StyledParagraph = styled.p`
  padding: 5px;
  min-height: 1em;
  font-family: monospace;
  font-size: 20px;
  color: #333;
`;

export const StyledUnorderedList = styled.ul`
  width: 66%;
  margin: 0 auto;
  border: 1px solid #eee;
  padding: 0;
  list-style-type: none;
`;

export const StyledListItem = styled.li`
  width: 100%;
  display: flex;
  font-family: system-ui;
  &:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.05);
  }
  label {
    position: relative;
    width: 5em;
    height: 150px;
  }
  span.checkmark {
    position: absolute;
    top: 50px;
    left: 20%;
    height: 25px;
    width: 25px;
    margin: 0.5em;
    background-color: #99b6c1;
    border-radius: 3px;
    &:after {
      content: "";
      position: absolute;
      display: none;
      left: 9px;
      top: 5px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
  &:hover {
    span.checkmark {
      background: #385f72;
    }
  }
  input {
    visibility: hidden;
  }
  input:checked ~ .checkmark {
    background-color: #2196f3;
    &:after {
      display: block;
    }
  }
  div {
    margin-left: 2em;
  }
`;
