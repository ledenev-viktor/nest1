import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export class ReviewModel extends Document {
  @Prop()
  name: string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  rating: number;

  @Prop()
  createdAt: Date;
}

export const ReviewModelSchema = SchemaFactory.createForClass(ReviewModel);
