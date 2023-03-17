import { overrideTailwindClasses } from 'tailwind-override'

export default (baseClasses, overriderClasses) => {
  if (Array.isArray(baseClasses)) baseClasses = baseClasses.join(' ')

  let overriden = overrideTailwindClasses(baseClasses + ' ' + overriderClasses)
  return overriden.replace(overriderClasses, '')
}