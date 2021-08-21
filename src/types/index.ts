export type Username = string

export type Memory = {
  title: string
  recordedDate: Date
  createdAt: Date
  updatedAt: Date
  objectId: string
  summary?: string
  tags?: Array<string>
}

export type ApiResponse = any

export type ParseSuccessResponse = {
  results: Array<any> | Object | []
}

export type User = {
  createdAt: string
  email: string
  objectId: string
  sessionToken: string
  username: Username
  updatedAt?: string
}
