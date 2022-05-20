import { Avatar, Box, Button, Center, Flex, Image, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Stack, Text } from "@chakra-ui/react"
import { BellIcon, ChatIcon, Search2Icon, SettingsIcon } from "@chakra-ui/icons";

const avatarUrl = 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9';
export const Navbar = () => {
    return (
        <Box w="full" pos="fixed" bg="#5F6CAF" px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <Image src="wet_bat_logo.svg" boxSize="32" alt="wet bat icon"/>
                <Flex alignItems={'center'}>
                    <Stack align={'center'} direction={'row'} spacing={7}>
                        <Flex borderRadius="10" align={'center'} h={10} w={500} bg="#E6E6E6" padding="2">
                            <Search2Icon />
                        </Flex>
                        <Flex align={'center'}>
                            <BellIcon color="white" h={6} w={6}/>
                        </Flex>
                        <Flex align={'center'}>
                            <ChatIcon color="white" h={5} w={5}/>
                        </Flex>
                        <Flex align={'center'}>
                            <SettingsIcon color="white" h={5} w={5}/>
                        </Flex>
                        <Menu>
                            <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
                                <Avatar size={'md'} src={avatarUrl} />
                            </MenuButton>
                            <MenuList alignItems={'center'}>
                                <Center>
                                    <Avatar marginTop={5} size={'2xl'} src={avatarUrl} />
                                </Center>
                                <Center>
                                    <Text marginTop={5}>Username</Text>
                                </Center>
                                <MenuDivider marginTop={5} />
                                <MenuItem>Account Settings</MenuItem>
                                <MenuItem>Logout</MenuItem>
                            </MenuList>
                        </Menu>
                    </Stack>
                </Flex>
            </Flex>
        </Box>
    )
}