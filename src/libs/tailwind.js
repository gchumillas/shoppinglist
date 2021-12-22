import { create } from 'tailwind-rn'
import styles from '~/tailwind.styles.json'

const { tailwind, getColor } = create(styles)
const Palette = {
  PrimaryText: getColor('primary')
}

export { tailwind as tw, getColor, Palette }
