import { Stack, Flex, Divider, Icon, Box, Text, Spacer, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react"
import { Table } from "antd";
import { FiRotateCw } from "react-icons/fi";
import { FaRegClock, FaExpandArrowsAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import { apiClient } from "../../services/apiClient";


export const PendingQuotes = () => {
    const [selectedQuote, setSelectedQuote] = useState({
        id:"",
        name:"",
        price:0,
        departure_airport_id:"",
        destination_airport_id:"",
        departure_date: "",
        return_date: "",
        number_of_travelers: "",
        transportation: "",
    });
    const [quotes, setQuotes] = useState([]);

    const openModalWithQuote = (quote) => {
        onOpen();
        setSelectedQuote(quote);
    };

    useEffect(() => {
        apiClient.get('/quotes').then((response) => {
            setQuotes(response.data);
        })
    });

    const { isOpen, onOpen, onClose } = useDisclosure()

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => (
                <a href="#quotes" onClick={() => openModalWithQuote(record)}>
                    {text}
                </a>
            )
        },
        {
            title: 'Transportation',
            dataIndex: 'transportation',
            key: 'transportation',
        },
        {
            title: 'People',
            dataIndex: 'number_of_travelers',
            key: 'number_of_travelers',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
    ];

    return (
        <>
            <Box className="pendingQuotes">
                <Flex p="5" gap="2">
                    <Icon color="#5BBFBA" w={8} h={8} as={FaRegClock}></Icon>
                    <Text marginTop="1" color="#5F6CAF" fontSize='24'>Pending Quotes</Text>
                    <Spacer />
                    <Icon marginTop="1" color="gray.300" w={6} h={6} as={FiRotateCw}></Icon>
                    <Icon marginTop="1" color="gray.300" w={6} h={6} as={FaExpandArrowsAlt}></Icon>
                </Flex>
                <Divider />
                <Table pagination={{ pageSize: 4 }} dataSource={quotes} columns={columns} />
            </Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Quote Details</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack>
                            <Stack direction="row">
                                <Text>Id: </Text>
                                <Text>{selectedQuote.id}</Text>
                            </Stack>
                            <Stack direction="row">
                                <Text>Name: </Text>
                                <Text>{selectedQuote.name}</Text>
                            </Stack>
                            <Stack direction="row">
                                <Text>Price: </Text>
                                <Text>{selectedQuote.price}</Text>
                            </Stack>
                            <Stack direction="row">
                                <Text>From: </Text>
                                <Text>{selectedQuote.departure_airport_id}</Text>
                            </Stack>
                            <Stack direction="row">
                                <Text>Destination: </Text>
                                <Text>{selectedQuote.destination_airport_id}</Text>
                            </Stack>
                            <Stack direction="row">
                                <Text>Departure: </Text>
                                <Text>{selectedQuote.departure_date}</Text>
                            </Stack>
                            <Stack direction="row">
                                <Text>Return: </Text>
                                <Text>{selectedQuote.return_date}</Text>
                            </Stack>
                            <Stack direction="row">
                                <Text>People: </Text>
                                <Text>{selectedQuote.number_of_travelers}</Text>
                            </Stack>
                            <Stack direction="row">
                                <Text>Transportation: </Text>
                                <Text>{selectedQuote.transportation}</Text>
                            </Stack>
                        </Stack>
                    </ModalBody>
                    <ModalFooter />
                </ModalContent>
            </Modal>
        </>
    )
}