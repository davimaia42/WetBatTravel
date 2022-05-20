import * as React from "react"
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { WelcomeCard } from "../../components/WelcomeCard";
import { QuickQuote } from "../../components/QuickQuote"
import { PendingQuotes } from "../../components/PendingQuotes";
import { NewLeads } from "../../components/NewLeads";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { Input } from "../../components/QuickQuote/input";


export const Home = () => {
    const theme = extendTheme({
        components: {
            Input
        }
    });

    return (
        <ChakraProvider theme={theme} >
            <Flex bg="#EDF0F9">
                <Navbar />
                <Sidebar> </Sidebar>
                <Grid p="5" margin={'8vw'} marginTop={'16'}>
                    <GridItem>
                        <WelcomeCard />
                    </GridItem>
                    <GridItem>
                        <Grid h='42vh' templateColumns='repeat(11, 1fr)' gap="6" marginTop="2vh">
                            <GridItem colSpan={4} bg="white" borderRadius="10">
                                <QuickQuote />
                            </GridItem>
                            <GridItem colSpan={4} bg="white" borderRadius="10">
                                <PendingQuotes />
                            </GridItem>
                            <GridItem colSpan={3} bg="white" borderRadius="10">
                                <NewLeads />
                            </GridItem>
                        </Grid>
                    </GridItem>
                </Grid>
            </Flex>
        </ChakraProvider>
    )
}