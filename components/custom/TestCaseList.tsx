import React, { useState } from 'react'
import { TestCase } from './UserRepoList'
import { Checkbox } from '../ui/checkbox'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Play, RefreshCw } from 'lucide-react'
import TestCaseSettingDialog from './TestCaseSettingDialog'


type Props = {
  testCases: TestCase[]
  onReload: any
}

const TestCaseList = ({ testCases, onReload }: Props) => {
  const [selectedTestCases, setSelectedTestCases] = useState<TestCase[]>([])

  const handleSelectedTestCase = (checked: boolean | string, testCase: TestCase) => {
    if (checked) {
      setSelectedTestCases((prev: any) => [...prev, testCase])
    } else {
      setSelectedTestCases((prev: any) => prev.filter((item: any) => item.id !== testCase.id))
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
                <h2 className='font-semibold'>{testCase?.title}</h2>
                <p className='text-xs text-gray-500 mt-1'>{testCase?.description}</p>
              </div>
            </div>

            <div className=' gap-4 flex'>
              <Badge variant={'secondary'}>{testCase?.type}</Badge>
              <Badge variant={'secondary'}>Pending</Badge>
              <TestCaseSettingDialog testCase={testCase} setReload={onReload}/>
              

            </div>
          </div>
        ))}
        <div className=' p-4 flex items-center justify-between bg-gray-100'>
          <h2>Run Selected Test Case</h2>
          <Button disabled={selectedTestCases?.length == 0}><Play className=' h-4 w-4 mr-2' />Run Selected</Button>
        </div>
      </div>
    </div>
  )
}

export default TestCaseList