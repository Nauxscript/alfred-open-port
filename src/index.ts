import { parsePort } from './core'
import type { Selection } from './types'

export default function run(argv: [string, boolean]) {
  const query = argv[0]
  const items = []
  items.push(parsePort('8080'))
  const currPort = parsePort(query)
  query && items.push(currPort)

  const result: {
    items: Selection[]
  } = {
    items,
  }

  // for testing
  if (argv[1])
    return result

  // eslint-disable-next-line no-console
  console.log(JSON.stringify(result, null, ''))
}
