import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/DavilsonJunior.png',
    alt: 'Davilson Junior',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const CustomTag: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
