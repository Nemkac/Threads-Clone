import { useState } from "react"
import { Flex, Text, Image, Box, Divider, Button, Avatar } from '@chakra-ui/react'
import { BsThreeDots } from "react-icons/bs";
import PostActions from "./PostActions";
import { Menu, MenuButton, MenuItem, MenuList} from '@chakra-ui/menu'

const Comment = ({userAvatar, comment, createdAt, username, likes}) => {
    const [liked, setLiked] = useState(false);
    return (
        <>
            <Flex gap={4} py={2} my={2} w={'full'}>
                <Avatar src={userAvatar} size={'sm'} />
                <Flex gap={1} w={'full'} flexDirection={'column'}>
                    <Flex w={'full'} justifyContent={'space-between'} alignItems={'center'}>
                        <Text fontSize={'sm'} fontWeight={'bold'}>{username}</Text>
                        <Flex gap={2} alignItems={'center'}>
                            <Text fontSize={'sm'} color={'gray.light'}>
                                {createdAt} ago
                            </Text>
                            <Menu>
                                <MenuButton className='dots-container'>
                                    <BsThreeDots cursor={'pointer'}/>
                                </MenuButton>
                                <MenuList bg={'gray.dark'}>
                                    <MenuItem bg={'gray.dark'}>Report comment</MenuItem>
                                </MenuList>
                            </Menu>
                        </Flex>
                    </Flex>
                    <Text>
                        {comment}
                    </Text>
                    <PostActions liked={liked} setLiked={setLiked}/>
                    <Text fontSize={'sm'} color={'gray.light'}>
                        {likes + (liked ? 1 : 0)} likes
                    </Text>
                </Flex>
            </Flex>
            <Divider/>
        </>
    )
}

export default Comment