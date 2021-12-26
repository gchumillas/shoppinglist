import { create } from 'tailwind-rn'
import styles from '~/tailwind.styles.json'

const { tailwind, getColor } = create(styles)
// TODO: remove Palette (use getColor('primary') instead)
const Palette = {
  PrimaryText: getColor('primary')
}

export { tailwind as tw, getColor, Palette }
