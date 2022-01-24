exports.handler = async (event) => {

  console.log({ event })
  const { headers = [] } = event

  const type = headers['twitch-eventsub-message-type'] || 'no-type'

  return {
    statusCode: 200,
    body: JSON.stringify({
      type,
      event,
      message: 'ok'
    }),
  }
}
