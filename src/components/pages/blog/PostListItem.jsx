import { useState } from 'react'
import { AnimatePresence } from "framer-motion"

import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter'
import { Button } from "@/components/dom/button"
import Stack from "@/components/dom/flex/stack"
import Text from "@/components/dom/text"
import { Avatar } from "@/components/dom/avatar"
import { Spacer } from '@/components/dom/flex'
import { CommentsList } from './CommentsList'

export const PostListItem = ({ title, body, userId, id, comments, ...props }) => {
  const [showComments, setShowComments] = useState(false)
  const capitalizedTitle = capitalizeFirstLetter(title)
  const capitalizedBody = capitalizeFirstLetter(body)

  return <Stack column css={{ maxWidth: '700px' }} {...props}>
    <Text h3 color="headline">{capitalizedTitle}</Text>
    <Spacer y={2} />
    <Text body>{capitalizedBody}</Text>
    <Spacer y={3} />
    <Stack gap={3} align="center">
      <Avatar css={{ backgroundImage: "url('/avatar.jpeg')" }} />
      <Text as="p" muted css={{ fontSize: '$2' }}>March 28, 2022</Text>
      <Text muted>|</Text>
      <Button onClick={() => setShowComments(!showComments)} data-id={id} type="text" css={{ marginRight: 'auto' }}>View Comments</Button>
    </Stack>
    <AnimatePresence>
      {showComments &&
        <CommentsList comments={comments} />
      }
    </AnimatePresence>
  </Stack>
}

export default PostListItem