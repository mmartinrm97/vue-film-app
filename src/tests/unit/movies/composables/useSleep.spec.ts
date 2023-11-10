import { describe, expect, it, vi, beforeEach } from 'vitest'
import { useSleep } from '@/movies/composables/useSleep'

beforeEach(() => {
  vi.useFakeTimers()
})

describe('useSleep', () => {
  it('should wait for the given seconds', async () => {
    const resolveSpy = vi.spyOn(Promise, 'resolve')
    const secondsParam: number = 2
    const promise = useSleep(secondsParam)

    expect(resolveSpy).not.toHaveBeenCalled()

    // await new Promise((resolve) => setTimeout(resolve, secondsParam))
    //1st way
    // vi.advanceTimersByTime(secondsParam * 1000)

    //2nd way
    vi.advanceTimersToNextTimer()

    const result = await promise

    expect(resolveSpy).toHaveBeenCalled()
    expect(result).toBe(true)

  })

})
