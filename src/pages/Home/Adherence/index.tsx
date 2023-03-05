import { Box, MenuItem, Select, TextField, Typography } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import React from 'react'
import { AdherenceInput, queryAdherence } from '../../../api/adherence/score'
import AdherenceChart from './Chart'

const Adherence: React.FC = () => {
  const [input, setInput] = React.useState<AdherenceInput>({
    treatmentSchedule: 3,
  })
  // const [dateRange, setDateRange] = React.useState<DateRange<Date>>()
  const { data, refetch } = queryAdherence(input, {
    enabled: false,
  })
  const score = React.useMemo(() => data?.adherenceScore, [data])
  const graphData = React.useMemo(() => score?.injectionsGraph, [score])

  React.useEffect(() => {
    refetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input])

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Adherence Score
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Select
          id="treatment-schedule-select"
          value={input.treatmentSchedule}
          onChange={(e) => {
            setInput({ ...input, treatmentSchedule: Number(e.target.value) })
          }}
          sx={{ mr: 2 }}
        >
          <MenuItem value={1}>one day</MenuItem>
          <MenuItem value={2}>two days</MenuItem>
          <MenuItem value={3}>three days</MenuItem>
          <MenuItem value={4}>four days</MenuItem>
          <MenuItem value={5}>five days</MenuItem>
          <MenuItem value={6}>six days</MenuItem>
          <MenuItem value={7}>seven days</MenuItem>
        </Select>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Start Date"
            value={input.startDate}
            onChange={(value) => setInput({ ...input, startDate: value || '' })}
            sx={{ mr: 2 }}
          />
          <DatePicker
            label="End Date"
            value={input.endDate}
            onChange={(value) => setInput({ ...input, endDate: value || '' })}
          />
        </LocalizationProvider>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <TextField
          label="Expected Injection"
          value={String(score?.expectedInjection)}
          disabled
        />
        <TextField
          label="Actual Injection"
          value={String(score?.actualInjection)}
          disabled
        />
        <TextField
          label="On Time Injection"
          value={String(score?.onTimeInjection)}
          disabled
        />
        <TextField
          label="Adherence Score"
          value={String(score?.adherenceScore)}
          disabled
        />
      </Box>
      <Box sx={{ mt: 3, height: 300 }}>
        {graphData && graphData.length ? (
          <AdherenceChart graphData={graphData || []} />
        ) : (
          <></>
        )}
      </Box>
    </Box>
  )
}

export default Adherence
