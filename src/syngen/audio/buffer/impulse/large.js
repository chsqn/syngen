/**
 * Returns a large reverb impulse.
 * @method
 * @returns {AudioBuffer}
 */
syngen.audio.buffer.impulse.large = (() => {
  const context = syngen.audio.context()

  const sampleRate = context.sampleRate,
    size = 4 * sampleRate

  const buffer = context.createBuffer(1, size, sampleRate)

  for (let n = 0; n < buffer.numberOfChannels; n += 1) {
    const data = buffer.getChannelData(n)
    for (let i = 0; i < size; i += 1) {
      const factor = ((size - i) / size) ** 8
      data[i] = factor * ((2 * Math.random()) - 1)
    }
  }

  return () => buffer
})()
