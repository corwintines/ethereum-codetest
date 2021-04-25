export const fetchRooms = async () => {
  let rooms = []
  let res = await fetch('https://pretalx.com/api/events/democon/rooms/')
  let data = await res.json()
  rooms = [...rooms, ...data.results]

  while (data.next) {
    res = await fetch(data.next)
    data = await res.json()
    rooms = [...rooms, ...data.results]
  }

  return rooms
}