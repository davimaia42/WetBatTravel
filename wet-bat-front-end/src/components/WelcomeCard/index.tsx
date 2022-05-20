import { Box, Grid, GridItem, Text, Center, Image } from "@chakra-ui/react"
import "./index.css";

export const WelcomeCard = () => (
    <Box className="welcomeCard" borderRadius="10"
        height={['46vh']}
        width={['88vw']}>
        <Grid templateColumns='repeat(2, 1fr)' gap={2} p="8">
            <GridItem>
                <Text fontWeight='800' fontSize='5vh' color="white" marginBottom={'5'}>Welcome to</Text>
                <Text fontWeight='800' fontSize='5vh' color="white" marginBottom={'5'}>your Dashboard</Text>
                <Text fontSize='2vh' color="white">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.</Text>
            </GridItem>
            <GridItem>
                <Center>
                    <Image width="25vw" src='welcome-banner.png' alt='Dan Abramov' />
                </Center>
                <Grid templateColumns='repeat(6, 1fr)' p="8">
                    <GridItem>
                        <Center>
                            <Text textShadow={'1px 1px 4px #6e6e6e'} fontWeight='800' fontSize='6vh' color="#F0CF85">101</Text>
                        </Center>
                    </GridItem>
                    <GridItem>
                        <Text fontSize='3vh' color="white">NEW LEADS</Text>
                    </GridItem>
                    <GridItem>
                        <Center>
                            <Text textShadow={'1px 1px 4px #6e6e6e'} fontWeight='800' fontSize='6vh' color="#F0CF85">35</Text>
                        </Center>
                    </GridItem>
                    <GridItem>
                        <Text fontSize='3vh' color="white">QUOTES CREATED</Text>
                    </GridItem>
                    <GridItem>
                        <Center>
                            <Text textShadow={'1px 1px 4px #6e6e6e'} fontWeight='800' fontSize='6vh' color="#F0CF85">40</Text>
                        </Center>
                    </GridItem>
                    <GridItem>
                        <Text fontSize='3vh' color="white">PENDING ORDERS</Text>
                    </GridItem>
                </Grid>
            </GridItem>
        </Grid>
    </Box>
)