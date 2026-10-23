import React, { useState } from 'react'
import { TestCase } from './UserRepoList'
import { Checkbox } from '../ui/checkbox'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Play, RefreshCw } from 'lucide-react'
import TestCaseSettingDialog from './TestCaseSettingDialog'
import axios from 'axios'


type Props = {
  testCases: TestCase[],
  onReload: any,
  repository: any
}

const TestCaseList = ({ testCases, onReload, repository }: Props) => {
  const [selectedTestCases, setSelectedTestCases] = useState<TestCase[]>([])
  // const [isModelOpen, setIsModelOpen] = useState(false)

  const handleSelectedTestCase = (checked: boolean | string, testCase: TestCase) => {
    if (checked) {
      setSelectedTestCases((prev: any) => [...prev, testCase])
    } else {
      setSelectedTestCases((prev: any) => prev.filter((item: any) => item.id !== testCase.id))
    }
  }

  const [isRunning, setIsRunning] = useState(false)

  const handleRunSelected = async () => {
    if (selectedTestCases.length === 0) return

    const baseUrl = repository?.targetDomain

    if (!baseUrl) {
      console.error('Repository target URL is missing')
      return
    }

    setIsRunning(true)

    try {
      for (const testCase of selectedTestCases) {
        await axios.post('/api/test-cases/run', {
          testCaseId: testCase.id,
          baseUrl,
          mode: 'run',
        })
      }

      await onReload(repository.repoId)
      setSelectedTestCases([])
    } catch (error: any) {
      console.error(
        'Failed to run selected test cases:',
        error.response?.data || error.message
      )
    } finally {
      setIsRunning(false)
    }
  }

  return (
    <div>
      <div className=' flex items-center justify-between'>
        <h2 className=' font-medium text-primary'>Generated Test Cases</h2>
        <Button size={'sm'} onClick={() => onReload(testCases[0]?.repoId)}><RefreshCw className=' h-3 w-3 mr-1' /> Refresh </Button>
      </div>
      <div className=' border rounded-md mt-3'>
        {testCases.map((testCase, index) => (
          <div key={index} className='border-b p-4 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <Checkbox
                checked={selectedTestCases?.some((item: any) => item.id == testCase?.id)}
                onCheckedChange={(checked) => handleSelectedTestCase(checked, testCase)} />
              <div>
                <h2>{testCase?.title}</h2>
                <p className='text-xs text-gray-500'>{testCase?.description}</p>
              </div>
            </div>

            <div className=' gap-4 flex items-center'>
              <Badge variant={'secondary'}>{testCase?.type}</Badge>
              {testCase?.status == 'passed' && <Badge variant={'default'} className=' text-green-200 font-normal bg-green-700'>{testCase?.status}</Badge>}
              {testCase?.status == 'failed' && <Badge variant={'destructive'} className=' text-red-200 font-normal'>{testCase?.status}</Badge>}
              {testCase?.status == 'running' && <Badge variant={'default'} className=' text-yellow-200 font-normal bg-yellow-700'>{testCase?.status}</Badge>}

              <TestCaseSettingDialog testCase={testCase} setReload={onReload} />


            </div>
          </div>
        ))}
        <div className=' p-4 flex items-center justify-between bg-gray-100'>
          <h2>Run Selected Test Case</h2>
          {/* <Button onClick={() => setIsModelOpen(true)} disabled={selectedTestCases?.length == 0}><Play className=' h-4 w-4 mr-2' />Run Selected</Button> */}
          <Button
            onClick={handleRunSelected}
            disabled={selectedTestCases.length === 0 || isRunning}
          >
            <Play className="h-4 w-4 mr-2" />
            {isRunning ? 'Running Tests...' : 'Run Selected'}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TestCaseList