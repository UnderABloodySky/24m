import React from 'react';
import styled, { withTheme } from 'styled-components';

const ImageWrapper = styled.div`
  // border: 3px solid ${props => props.theme.colors.light};
  // border-bottom-width: 6px;
  transition: all 100ms ease-in-out;
  // filter: grayscale(50%);
  // box-shadow: 0 3px 4px -1px rgba(0,0,0,.35);
  border-radius: 3px;
  overflow:hidden;

  // &:first-child {
  //   grid-column: 3 / span 8;
  //   grid-row: 2 / span 2;
  //   justify-self: center;
  //   align-self: center;
  // }

  :hover {
    // border-color: ${props => props.theme.colors.dark};
    filter: none;
  }
  :hover {

    position:relative;
    z-index:2;
    transform: scale(3);
  }

  transform: scale(.9);
  :nth-child(odd) {
    transform: scale(1) translateY(-10px);
  }

`;

const Image = styled.img`
  display:block;
  margin: 0;
  width: 100%;
  height: 100%;
`;

const Media = (props) => {
  
  let theme = { ...props.theme, y:props.y, scale:props.scale };

  return (
    <ImageWrapper className="Media" theme={theme}>
      <Image src={props.src} />
    </ImageWrapper>
  );
}

export default withTheme(Media);