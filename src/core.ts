import '@jxa/global-type'
import type { Selection } from './types'

const app = Application.currentApplication()
app.includeStandardAdditions = true

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
    mods: {
      cmd: {
        subtitle: `http://127.0.0.1:${port}`,
        arg: `127.0.0.1:${port}`,
      },
      ctrl: {
        subtitle: `http://${getIntranetIP()}:${port}`,
        arg: `${getIntranetIP()}:${port}`,
      },
    },
  }
}

export const parseEnvPort = (ports: string) => {
  const portArr = ports.split(',')
  return portArr.filter(item => item).map(item => parsePort(item))
}

export const deduplicate = (target: Selection[]) => {
  const uniqueKeys = {} as Record<string, boolean>
  target.reduce((curr, next) => {
    if (uniqueKeys[next.title]) {
      uniqueKeys[next.title] = true
      curr.push(next)
    }
    return curr
  }, [] as Selection[])
}
