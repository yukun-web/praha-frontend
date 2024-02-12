import { CommonButton } from './CommonButton'
import { action } from '@storybook/addon-actions'

export default {
  component: CommonButton,
}

const onClick = action('onClick')

export const Default = {
  args: {
    children: '応募する',
    onClick
  },
}

export const ColoringAndSizing = {
  args: {
    children: '削除する',
    color: 'red',
    size: 'small',
    onClick
  },
}

export const Disabled = {
  args: {
    children: '削除する',
    color: 'red',
    size: 'small',
    disabled: true,
    onClick
  },
}