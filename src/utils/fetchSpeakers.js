export const fetchSpeakers = async () => {
  let speakers = []
  let res = await fetch('https://pretalx.com/api/events/democon/speakers/')
  let data = await res.json()
  speakers = [...speakers, ...data.results]

  while (data.next) {
    res = await fetch(data.next)
    data = await res.json()
    speakers = [...speakers, ...data.results]
  }

  return speakers
}