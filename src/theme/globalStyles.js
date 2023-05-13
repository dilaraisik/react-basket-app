import { GlobalStyles as MUIGlobalStyles } from '@mui/material';

export default function GlobalStyles() {
  const inputGlobalStyles = (
    <MUIGlobalStyles
      styles={{
        body: { backgroundColor: "#f9fafb" }
      }}
    />
  );

  return inputGlobalStyles;
}
