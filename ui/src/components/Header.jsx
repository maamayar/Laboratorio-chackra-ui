import { Image, Box, Button, ButtonGroup, Flex , Text, Stack } from '@chakra-ui/react';

function Header() {
  return (
    <>
        <Box
        maxHeight="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        >
         <Image
        src='https://www.xtrafondos.com/wallpapers/noche-con-estrellas-en-paisaje-montanosos-con-nieve-5937.jpg'
        alt='cielo'
        objectFit="cover"
        objectPosition={['center', 'center', ]}
        height="100vh"
        />
        </Box>
        <Box
        display="flex"
        width="100vw"
        h="40vh"
        justifyContent='center'
        alignItems='center'
        position='absolute'
        top={["40vh", "20vh", "30vh"]}
        // top="35vh"
        flexWrap="wrap"
        >
            <Stack spacing={3}>
                <Text
                fontSize={['3xl', '4xl', '3xl']}
                color="white"
                mt={['2rem', '2rem', '2rem']}
                textAlign={['center', 'center', 'center']}
                >
                VIVE  LA EXPERIENCIA</Text>
            </Stack>
        </Box>

        <Box
        display="flex"
        width="100vw"
        h="100vh"
        justifyContent='center'
        alignItems='center'
        position='absolute'
        top={['25%', '1vh', '15vh']}
        flexWrap="wrap"
        >
            <Flex
            direction={['column', 'row']}
            gap="8">
                <Button
                border="solid 2px"
                borderRadius="0"
                width={['18em', 'auto']}
                color="white"
                >
                    VER DETALLES
                </Button>
                <Button
                border="solid 2px"
                borderRadius="0"
                width={['18em', 'auto']}
                color="white"
                >
                    VER VÍDEO
                </Button>
            </Flex>

        </Box>
    </>
  );
}
export default Header;
