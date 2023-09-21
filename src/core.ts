import '@jxa/global-type'
import type { Selection } from './types'

const app = Application.currentApplication()
app.includeStandardAdditions = true

export const cacheFileName = 'ports'
export const innerDefaultPort = '8080'

export const getenv = (name: string) => {
  if (typeof $ === 'undefined')
    return process.env[name]

  ObjC.import('stdlib')
  try {
    return $.getenv(name)
  }
  catch (e) {
    return null
  }
}

const getIntranetIP = () => (app.systemInfo() as any).ipv4Address

export const parsePort = (port: string): Selection => {
  return {
    title: `Port: ${port}`,
    subtitle: `http://localhost:${port}`,
    arg: `localhost:${port}`,
    variables: {
      currPort: port,
    },
    mods: {
      cmd: {
        subtitle: `open http://127.0.0.1:${port}`,
        arg: `127.0.0.1:${port}`,
      },
      ctrl: {
        subtitle: `open http://${getIntranetIP()}:${port}`,
        arg: `${getIntranetIP()}:${port}`,
      },
      alt: {
        subtitle: `remove ${port}`,
        arg: port,
      },
    },
  }
}

export const portsStr2Arr = (portsStr: string) => portsStr.split(',')

export const parsePortsStr = (ports: string[]) => {
  const uniquePorts = [...new Set(ports.filter(item => item.replace(/\D/g, '')))]
  return uniquePorts.map(item => parsePort(item))
}

export const isFileExist = (path: string) => {
  // Check if the file exists
  const fileExists = app.doShellScript(`test -e "${path}" && echo "true" || echo "false"`)

  return fileExists === 'true'
}

export const getCachePortsFilePath = () => {
  const alfredWorkflowDataPath = getenv('alfred_workflow_data')
  return `${alfredWorkflowDataPath}/${cacheFileName}`
}

export const getContentFromFile = (path: string) => {
  if (!isFileExist(path))
    return ''
  const fileContent = app.doShellScript(`cat "${path}"`) as string
  return fileContent
}

export const getCachePorts = () => {
  const cachePortFilePath = getCachePortsFilePath()
  const portsStr = getContentFromFile(cachePortFilePath)
  return portsStr.split(',')
}

export const matchPort = (ports: string[], query: string) => ports.filter(port => port.includes(query))
