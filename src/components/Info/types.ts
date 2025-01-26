export interface InfoProps {
  temperature: number
  city: string
  weatherImg: string
  onSave?: () => void
  onDelete: () => void
  isHistory?: boolean
}
