export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('@/shared/api/mocks/server')
  }
}
