export const fetchTalks = async () => {
  let talks = []
  let res = await fetch('https://pretalx.com/api/events/democon/talks/')
  let data = await res.json()
  talks = [...talks, ...data.results]

  while (data.next) {
    res = await fetch(data.next)
    data = await res.json()
    talks = [...talks, ...data.results]
  }

  return talks
}