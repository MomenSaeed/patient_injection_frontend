import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { queryInjectionsList } from '../../api/injections/list'
import LoadMore from '../../components/LoadMore'

const InjectionsList: React.FC = () => {
  const { data, hasNextPage, fetchNextPage } = queryInjectionsList()

  const injections = data?.pages
    .map((page) => page.injectionsConnection.nodes)
    .flat()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h5">Injections List</Typography>
        <Button variant="outlined">+ Create Injection</Button>
      </Box>
      <Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            mt: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography>dose</Typography>
            {injections &&
              injections.map((injection) => (
                <Typography key={injection.id}>{injection.dose}</Typography>
              ))}
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Typography>drugName</Typography>
            {injections &&
              injections.map((injection) => (
                <Typography key={injection.id}>{injection.drugName}</Typography>
              ))}
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Typography>lotNumber</Typography>
            {injections &&
              injections.map((injection) => (
                <Typography key={injection.id}>
                  {injection.lotNumber}
                </Typography>
              ))}
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Typography>Time</Typography>
            {injections &&
              injections.map((injection) => (
                <Typography key={injection.id}>
                  {new Date(
                    Date.parse(injection.createdAt)
                  ).toLocaleDateString()}
                </Typography>
              ))}
          </Box>
        </Box>
        <LoadMore
          length={injections?.length || 0}
          total={data?.pages[0].injectionsConnection.totalCount || 0}
          loadMore={fetchNextPage}
          hasNextPage={hasNextPage || false}
        />
      </Box>
    </Box>
  )
}

export default InjectionsList
