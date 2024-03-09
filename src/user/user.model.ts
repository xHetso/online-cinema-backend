import { prop } from '@typegoose/typegoose'

export class User {
  @prop({ required: true })
  email: string

  @prop({ required: true })
  password: string

  @prop({ required: true })
  name: string
}
