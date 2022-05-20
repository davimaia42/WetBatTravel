import { Flex, Grid, FormControl, Input, Select, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Button, Divider, Icon, Box, Text, Spacer, Center } from "@chakra-ui/react"
import { FaAngleDoubleRight, FaExpandArrowsAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import { apiClient } from "../../services/apiClient";

export const QuickQuote = () => {
    const [airports, setAirports] = useState([]);
    const [from, setFrom] = useState('');
    const [destination, setDestination] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [transportation, setTransportation] = useState('');
    const [people, setPeople] = useState(0);

    useEffect(() => {
        apiClient.get('/airports').then((response) => {
            setAirports(response.data);
        })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        apiClient.post("/quotes", {
            name,
            price,
            transportation,
            number_of_travelers: people,
            departure_date: departureDate,
            return_date: returnDate,
            departure_airport_id: from,
            destination_airport_id: destination
        })
    }

    return (
        <Box>
            <Flex p="5" gap="2">
                <Icon color="#5BBFBA" w={8} h={8} as={FaAngleDoubleRight}></Icon>
                <Text marginTop="1" color="#5F6CAF" fontSize='24'>Quick Quote</Text>
                <Spacer />
                <Icon marginTop="1" color="gray.300" w={6} h={6} as={FaExpandArrowsAlt}></Icon>
            </Flex>
            <Divider />
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <Grid p="5" gap="5" templateColumns='repeat(2, 1fr)' templateRows='repeat(4, 1fr)' className="quickQuoteForm">
                        <Input bg="#EDF0F9" placeholder="NAME" onChange={({ target }) => setName(target.value)} />
                        <Input bg="#EDF0F9" placeholder="PRICE" onChange={({ target }) => setPrice(parseFloat(target.value))}/>
                        <Select bg="#EDF0F9" placeholder="FROM" onChange={({ target }) => setFrom(target.value)}>
                            {airports.map(airport => <option value={airport.id}>{airport.name}</option>)}
                        </Select>
                        <Select bg="#EDF0F9" placeholder="DESTINATION" onChange={({ target }) => setDestination(target.value)}>
                            {airports.map(airport => <option value={airport.id}>{airport.name}</option>)}
                        </Select>
                        <Input id="departure_date" bg="#EDF0F9" placeholder="DEPARTURE DATE" onChange={({ target }) => setDepartureDate(target.value)} />
                        <Input id="departure_date" bg="#EDF0F9" placeholder="RETURN DATE" onChange={({ target }) => setReturnDate(target.value)} />
                        <NumberInput bg="#EDF0F9" onChange={(value) => setPeople(parseInt(value))}>
                            <NumberInputField placeholder="PEOPLE" />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                        <Input id="transportation" placeholder="TRANSPORTATION" bg="#EDF0F9" onChange={({ target }) => setTransportation(target.value)} />
                    </Grid>
                    <Center marginBottom="2">
                        <Button type="submit" borderRadius="20" bg="#5BBFBA" color="white">Create a quote</Button>
                    </Center>
                </FormControl>
            </form>
        </Box>
    )
}