import { Capacitor } from '@capacitor/core'

const Admob = {
  async initialize() {
    if (Capacitor.isNativePlatform()) {
      this.AdMob = Capacitor.Plugins.AdMob
      await this.AdMob.initialize()
      console.log('AdMob inicializado')
    }
  },
  async showRewarded() {
    if (!this.AdMob) return
    const rewarded = await this.AdMob.createRewarded({ adId: 'ca-app-pub-5574985001749299~5090725901' })
    await rewarded.load()
    const result = await rewarded.show()
    if (result) {
      return true
    }
    return false
  }
}

export default Admob
