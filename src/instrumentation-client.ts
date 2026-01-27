const enableMocking = async () => {
  if (typeof window !== 'undefined') {
    const { worker } = await import('@/shared/api/mocks')
    worker.start({ onUnhandledRequest: 'bypass' })
  }
}

enableMocking()
