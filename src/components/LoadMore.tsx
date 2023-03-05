import React from 'react'

import { Box, Typography, Button } from '@mui/material'

interface LoadMoreProps {
  length: number
  total: number
  loadMore: () => void
  hasNextPage: boolean
}

const LoadMore: React.FC<LoadMoreProps> = (props) => {
  const { length, total, loadMore, hasNextPage } = props
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mt: 1,
      }}
    >
      <Typography color="text.secondary">
        {`show ${length} outof ${total}`}
      </Typography>
      <Button onClick={loadMore} disabled={!hasNextPage}>
        Load More
      </Button>
    </Box>
  )
}

export default LoadMore
