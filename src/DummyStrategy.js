import {
  BaseVersionStrategy,
  BUMP_LEVEL
} from '@theo.gravity/version-bump'

/**
 * Doesn't really do anything, mainly exists for testing in the main
 * version-bump module
 */
export default class DummyStrategy extends BaseVersionStrategy {
  static strategyShortName = 'dummy'

  static getCommandConfig () {
    return {
      command: DummyStrategy.strategyShortName,
      describe: `Dummy strategy that does nothing. Used for testing purposes only.`
    }
  }

  /**
   * Returns the next release version to update the versionFile with.
   * @returns {Promise<Object>} semver parsed object
   */
  async getNextVersion () {
    return {
      'build': undefined,
      'major': 1,
      'matches': true,
      'minor': 2,
      'patch': 4,
      'pre': undefined,
      'version': '1.2.4'
    }
  }

  _determineBumpLevel () {
    return BUMP_LEVEL.LOWEST
  }
}
