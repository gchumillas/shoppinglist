import { create } from 'tailwind-rn'
import styles from '~/tailwind.styles.json'

const { tailwind, getColor } = create(styles)
export { tailwind as tw, getColor }
