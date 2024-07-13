'use client'

import { useState } from 'react'

import {
  getSmartAccountClient,
  type SafeSmartAccountClient
} from '../lib/permissionless'
import ScheduledTransferForm from '../components/ScheduledTransferForm'
import ObtainWristSignature from '../components/ObtainWristSignature'

export default function Home () {
  const [safe, setSafe] = useState<SafeSmartAccountClient | undefined>()

  const handleLoadSafe = async () => {
    const safe = await getSmartAccountClient()
    setSafe(safe)
  }

  return (
    <>
      {safe == null ? (
        <>
          <button onClick={handleLoadSafe} style={{ marginTop: '40px' }}>
            Create Safe
          </button>
        </>
      ) : (
        <div>
        <ScheduledTransferForm safe={safe} />
        <ObtainWristSignature safe={safe} />
        </div>
      )}
    </>
  )
}
