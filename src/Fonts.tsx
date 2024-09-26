import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
    @font-face{
        font-family: 'Quicksand';
        src:url('/src/assets/Quicksand-Regular.ttf') format('truetype');
    } `}
  />
);

export default Fonts;
