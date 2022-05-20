import React, { ReactNode } from 'react';
import {
  IconButton,
  Box,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Center,
} from '@chakra-ui/react';
import {
  FiMenu,
} from 'react-icons/fi';
import {
    IoMdDocument,
    IoMdAnalytics,
    IoMdPeople,
    IoIosSettings,
    IoIosHelpBuoy
} from 'react-icons/io'
import {
  FaListAlt,
  FaHome,
  FaDollarSign,
  FaPaperPlane,
} from 'react-icons/fa';
import { IconType } from 'react-icons';
import { ReactText } from 'react';

interface LinkItemProps {
  name: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FaHome },
  { name: 'Quotes', icon: FaDollarSign },
  { name: 'Leads', icon: FaListAlt },
  { name: 'Tours', icon: FaPaperPlane },
  { name: 'Invoices', icon: IoMdDocument },
  { name: 'Analytics', icon: IoMdAnalytics },
  { name: 'Team', icon: IoMdPeople },
  { name: 'Admin', icon: IoIosSettings },
  { name: 'Support', icon: IoIosHelpBuoy },
];

export const  Sidebar = ({ children }: { children: ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box marginTop="16" minH="100vh" w={{ base: 'full', md: '8%' }} pos="fixed">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue('#E6E6E6', 'gray.900')}
      h="full"
      pos="fixed"
      {...rest}>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Center _hover={{ bg: '#CCD0DC' }}>
        <Flex
          align="center"
          color="#5F6CAF"
          p="4"
          role="group"
          cursor="pointer"
          {...rest}>
          {icon && (
            <Icon
              mr="3"
              fontSize="16"
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Center>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};
