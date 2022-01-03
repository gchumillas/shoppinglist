import React from 'react'
import { StyleSheet, View } from 'react-native'
import NewIcon from '~/assets/icons/new.svg'
import MicIcon from '~/assets/icons/mic.svg'
import DeleteIcon from '~/assets/icons/delete.svg'
import SettingsIcon from '~/assets/icons/translate.svg'
import { Icon } from '~/src/components/display'
import { Link } from '~/src/components/navigation'
import { tw } from '~/src/libs/tailwind'

const iconSize = 55

const Component = _ => {
  return <View style={styles.wrapper}>
    <Link to="/settings">
      <Icon component={SettingsIcon} size={iconSize} />
    </Link>
    <Link to="/new-article">
      <Icon component={NewIcon} size={iconSize} />
    </Link>
    <Link to="/recorder">
      <Icon component={MicIcon} size={iconSize} />
    </Link>
    <Link to="/delete-all-articles">
      <Icon component={DeleteIcon} size={iconSize} />
    </Link>
  </View>
}

const styles = StyleSheet.create({
  wrapper: tw`flex flex-row justify-evenly items-center py-4`
})

export default Component
