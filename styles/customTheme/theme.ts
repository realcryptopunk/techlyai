import { extendTheme } from "@chakra-ui/react";
import Link from "next/link";

const theme = extendTheme({
  styles: {
    global: {      
      ".js-focus-visible :focus:not([data-focus-visible-added])": {
        
      },
    },
  },
 components: {
    Link,
  },
});
export default theme;