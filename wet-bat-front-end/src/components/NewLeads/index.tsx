import { Flex, Divider, Icon, Box, Text, Spacer, Stack, Avatar } from "@chakra-ui/react"
import { FiRotateCw } from "react-icons/fi";
import { FaRegEnvelope, FaExpandArrowsAlt } from "react-icons/fa";

export const NewLeads = () => (
    <Box className="newLeads">
        <Flex p="5" gap="2">
            <Icon color="#5BBFBA" w={8} h={8} as={FaRegEnvelope}></Icon>
            <Text marginTop="1" color="#5F6CAF" fontSize='24'>New Leads</Text>
            <Spacer />
            <Icon marginTop="1" color="gray.300" w={6} h={6} as={FiRotateCw}></Icon>
            <Icon marginTop="1" color="gray.300" w={6} h={6} as={FaExpandArrowsAlt}></Icon>
        </Flex>
        <Divider />
        <Stack p="5" spacing="5">
            <Stack align={'center'} direction={'row'} spacing={7}>
                <Avatar src="https://avatars.dicebear.com/api/big-smile/1.svg"></Avatar>
                <Stack>
                    <Text color="gray.600" fontWeight="800">Jane Smith</Text>
                    <Text color="gray.500">Hey! I want to place my package</Text>
                </Stack>
                <Spacer />
                <Text>13:30</Text>
            </Stack >
            <Stack align={'center'} direction={'row'} spacing={7}>
                <Avatar src="https://avatars.dicebear.com/api/big-smile/12.svg"></Avatar>
                <Stack>
                    <Text color="gray.600" fontWeight="800">Jane Smith</Text>
                    <Text color="gray.500">Hey! I want to place my package</Text>
                </Stack>
                <Spacer />
                <Text>14:30</Text>
            </Stack>
            <Stack align={'center'} direction={'row'} spacing={7}>
                <Avatar src="https://avatars.dicebear.com/api/big-smile/123.svg"></Avatar>
                <Stack>
                    <Text color="gray.600" fontWeight="800">Jane Smith</Text>
                    <Text color="gray.500">Hey! I want to place my package</Text>
                </Stack>
                <Spacer />
                <Text>15:30</Text>
            </Stack>
            <Stack align={'center'} direction={'row'} spacing={7}>
                <Avatar src="https://avatars.dicebear.com/api/big-smile/1234.svg"></Avatar>
                <Stack>
                    <Text color="gray.600" fontWeight="800">Jane Smith</Text>
                    <Text color="gray.500">Hey! I want to place my package</Text>
                </Stack>
                <Spacer />
                <Text>16:30</Text>
            </Stack>
        </Stack>
    </Box>
)