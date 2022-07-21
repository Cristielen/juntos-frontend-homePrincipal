import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  Code,
  theme,
} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            > Learn Chakra
            </Link>
      </Box>
    </ChakraProvider>
  );
}

export default App;
