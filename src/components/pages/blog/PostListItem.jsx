import { useState } from 'react'

import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter'
import { Button } from "@/components/_common/button"
import Stack from "@/components/_common/flex/stack"
import Text from "@/components/_common/text"
import { Avatar } from "@/components/_common/avatar"
import { Spacer } from '@/components/_common/flex'
import { CommentsList } from './CommentsList'

// eslint-disable-next-line no-unused-vars
export const PostListItem = ({ title, body, userId, id, ...props }) => {
  const [showComments, setShowComments] = useState(false)
  const capitalizedTitle = capitalizeFirstLetter(title)
  const capitalizedBody = capitalizeFirstLetter(body)

  return (
    <Stack
      as="article"
      column
      css={{ maxWidth: '700px' }}
      aria-expanded={showComments}
      {...props}
    >
      <Text h4 color="headline">{capitalizedTitle}</Text>
      <Spacer y={2} />
      <Text body color="body">{capitalizedBody}</Text>
      <Spacer y={3} />
      <Stack gap={3} align="center">
        <Avatar css={{ backgroundImage: "url('/avatar.jpeg')" }} />
        <Text body as="p" color="body" css={{ fontSize: '$2', fontWeight: 500 }}>March 28, 2022</Text>
        <Text css={{ marginLeft: '$2', color: 'rgb(48, 50, 54)', fontWeight: 500 }}>|</Text>
        <Button
          onMouseDown={e => e.preventDefault()} // disable focus on click
          onClick={() => {
            setShowComments(!showComments)
          }}
          data-id={id}
          style="text"
          css={{ marginRight: 'auto', fontWeight: 500 }}
        >
          Show Comments
        </Button>
      </Stack>
      {showComments &&
        <CommentsList id={id} />
      }
    </Stack>
  )
}

export default PostListItem