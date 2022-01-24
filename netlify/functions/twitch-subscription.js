exports.handler = async (event) => {

  console.log({ event })
  const { headers = [] } = event

  const type = headers['twitch-eventsub-message-type'] || 'no-type'
  const subType = headers['twitch-eventsub-subscription-type'] || 'no-sub-type'

  return {
    statusCode: 200,
    body: JSON.stringify({
      type,
      subType,
      message: 'ok'
    }),
  }
}
