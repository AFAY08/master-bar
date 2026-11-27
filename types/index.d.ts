declare module 'claude-code' {
  interface PluginState {
    'master-bar': {
      tick: number
      isBusy: boolean
      isArmed: boolean
      undo: string | null
    }
  }
}
