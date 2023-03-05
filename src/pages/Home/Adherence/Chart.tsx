import React from 'react'
import { AxisOptions, Chart } from 'react-charts'
import { InjectionGraph } from '../../../api/adherence/types'

interface AdherenceChartProps {
  graphData: InjectionGraph[]
}

const AdherenceChart: React.FC<AdherenceChartProps> = ({ graphData }) => {
  const dataa = [
    {
      label: 'Expected Injection',
      data:
        graphData?.map((graph) => ({
          date: new Date(Date.parse(graph.date)).toDateString(),
          value: graph.expectedInjection,
        })) || [],
    },
    {
      label: 'Had Injection',
      data:
        graphData?.map((graph) => ({
          date: new Date(Date.parse(graph.date)).toDateString(),
          value: graph.hasInjection,
        })) || [],
    },
  ]

  const primaryAxis = React.useMemo(
    () => ({
      getValue: (datum: { date: string }) => datum.date,
    }),
    []
  )
  const secondaryAxes = React.useMemo(
    (): AxisOptions<{ value: boolean }>[] => [
      {
        getValue: (datum) => (datum.value ? 1 : 0),
        elementType: 'bar',
      },
    ],
    []
  )

  return (
    <Chart
      options={{
        data: dataa,
        primaryAxis,
        secondaryAxes,
      }}
    />
  )
}

export default AdherenceChart
