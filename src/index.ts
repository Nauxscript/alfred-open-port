import { getCachePortsFilePath, getContentFromFile, getenv, innerDefaultPort, matchPort, parsePortsStr, portsStr2Arr } from './core'
import type { Selection } from './types'

export default function run(argv: [string, boolean]) {
  const currPort = argv[0]

  const envPortsStr = getenv('myPorts') as string
  const cachePortFilePath = getCachePortsFilePath()
  const cachePortsStr = getContentFromFile(cachePortFilePath)
  const allPortsStr = `${currPort},${envPortsStr},${cachePortsStr},${innerDefaultPort}`
  const allPorts = portsStr2Arr(allPortsStr)
  const matchPorts = matchPort(allPorts, currPort)
  const ports = parsePortsStr(matchPorts)

  const result: {
    items: Selection[]
  } = {
    items: ports,
  }

  // for testing
  if (argv[1])
    return result

  // eslint-disable-next-line no-console
  console.log(JSON.stringify(result, null, ''))
}
