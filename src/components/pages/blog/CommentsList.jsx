import { motion } from 'framer-motion'

import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter'
import { Stack } from "@/components/dom/flex"
import { Avatar } from '@/components/dom/avatar'
import Text from '@/components/dom/text'
import { Spacer } from '@/components/dom/flex'
import { Link } from '@/components/dom/links'
import Loader from '@/components/dom/loader'
import Card from '@/components/dom/card'

import { useGetCommentsQuery } from '@/features/api/apiSlice'

// eslint-disable-next-line no-unused-vars
const CommentListItem = ({ name, email, body, postId, ...props }) => {
  return <Stack
    column
    as={motion.li}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    {...props}
  >
    <Stack gap={3} align="center">
      <Avatar css={{ backgroundImage: "url('/avatar.jpeg')" }} />
      {name && <Link css={{ fontWeight: '$heading', lineHeight: '$body', color: '$text_headline', '&:hover': { color: '$primary400' } }} href={`mailto: ${email}`}>{capitalizeFirstLetter(name)}</Link>}
    </Stack>
    <Spacer y={2} />
    {body && <Text body color="body" css={{ marginLeft: '$4' }}>{capitalizeFirstLetter(body)}</Text>}
  </Stack>
}

export const CommentsList = ({ id }) => {
  const {
    data: comments,
    isLoading,
    isSuccess,
    isError,
    error } = useGetCommentsQuery(id)

  if (!id) {
    return null
  }

  let content = null
  console.log('comments: ', comments)

  if (isLoading) {
    // TODO: We should probably make a skeleton for results while loading to avoid CLS (layout shift), minHeight is a temp fix
    content = <Loader css={{ minHeight: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
  } else if (isSuccess) {
    content = comments?.map(({ id, ...post }) => <CommentListItem key={id} id={id} {...post} />)
  } else if (isError) {
    content = <Card status="error"><Text status="error">{JSON.stringify(error, null, 2)}</Text></Card>
  }

  return <Stack
    initial={{ height: 0, marginTop: 0 }}
    animate={{ height: 'auto', marginTop: '3.2rem' }}
    exit={{ height: 0, marginTop: 0 }}
    as={motion.ul}
    column
    gap={4}
    css={{
      paddingLeft: '$4',
      borderLeft: '1px solid rgb(48, 50, 54)'
    }}
  >
    {content}
  </Stack>
}