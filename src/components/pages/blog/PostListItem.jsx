import { useState } from 'react'
import { AnimatePresence } from "framer-motion"

import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter'
import { Button } from "@/components/dom/button"
import Stack from "@/components/dom/flex/stack"
import Text from "@/components/dom/text"
import { Avatar } from "@/components/dom/avatar"
import { Spacer } from '@/components/dom/flex'
import { CommentsList } from './CommentsList'

// eslint-disable-next-line no-unused-vars
export const PostListItem = ({ title, body, userId, id, comments, ...props }) => {
  const [showComments, setShowComments] = useState(false)
  const capitalizedTitle = capitalizeFirstLetter(title)
  const capitalizedBody = capitalizeFirstLetter(body)

  return <Stack as="article" column css={{ maxWidth: '700px' }} {...props}>
    <Text h3 color="headline">{capitalizedTitle}</Text>
    <Spacer y={2} />
    <Text body>{capitalizedBody}</Text>
    <Spacer y={3} />
    <Stack gap={3} align="center">
      <Avatar css={{ backgroundImage: "url('/avatar.jpeg')" }} />
      <Text as="p" color="muted" css={{ fontSize: '$2', fontWeight: 500 }}>March 28, 2022</Text>
      <Text color="muted" css={{ fontWeight: 500 }}>|</Text>
      {comments && comments.length > 0 && <Button
        onClick={() => setShowComments(!showComments)}
        data-id={id}
        style="text"
        css={{ marginRight: 'auto', fontWeight: 500 }}
      >
        Comments ({comments.length})
      </Button>}
    </Stack>
    <AnimatePresence>
      {showComments &&
        <CommentsList comments={comments} />
      }
    </AnimatePresence>
  </Stack>
}

export default PostListItem