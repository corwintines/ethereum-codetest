export const fetchEvent = async () => {
  const res = await fetch('https://pretalx.com/api/events/democon/')
  const data = await res.json()

  return data
}