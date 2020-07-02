export interface Joke {
  icon_url?: string
  value: string
  id: number | string
  updated_at?: string
  url?: string
  favorite: boolean
  categories?: []
  result?: [Joke]
}
