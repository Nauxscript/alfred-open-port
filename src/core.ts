import '@jxa/global-type'
import type { Selection } from './types'

const app = Application.currentApplication()
app.includeStandardAdditions = true

const getIntranetIP = () => (app.systemInfo() as any).ipv4Address

export const parsePort = (port: string): Selection => {
  return {
    title: `Port:${port}`,
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
