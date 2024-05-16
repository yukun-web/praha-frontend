import { Now } from '@/app/csr/Now'
import { Meta, StoryObj } from '@storybook/react'
import { http, HttpResponse } from 'msw'

const meta = {
  title: 'app/csr/Now',
  component: Now,
} satisfies Meta<typeof Now>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('http://localhost:3000/now', () => HttpResponse.json({
          now: new Date().toISOString()
        }))
      ]
    }
  }
};