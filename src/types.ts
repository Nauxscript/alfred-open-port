// refer to https://www.alfredapp.com/help/workflows/inputs/script-filter/json/
export interface Selection {
  // if you need the selection result to be sorted by common using, set the uid field
  uid?: string
  title: string
  subtitle?: string
  arg?: string | string[]
  autocomplete?: string
  icon?: {
    type?: 'fileicon'
    path: string
  }
  mods?: Mod
  valid?: boolean
  type?: 'default' | 'file' | 'file:skipcheck'
  action?: string | string[] | Action
  text?: {
    copy: string
    largetype: string
  }
  match?: string
  quicklookurl?: string

}

export type Mod = Partial<Record<ModComb, ModItem>>

export type ModNames = 'cmd' | 'alt' | 'ctrl' | 'shift' | 'fn'

export type t = {
  [k in ModNames]: {
    [v in ModNames]: k extends v ? v extends k ? v : `${k} + ${v}` : `${k} + ${v}`
  }
}

// the same key combinations is not allowed, 'fn + fn' e.g.
export type ModComb = `${t[ModNames][ModNames]}`

export interface ModItem {
  valid?: string
  arg: string
  subtitle: string
}

export interface Action {
  text: string
  url: string
  file: string
  auto: string
}
