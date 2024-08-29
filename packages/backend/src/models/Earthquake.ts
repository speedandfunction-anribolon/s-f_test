import { Schema, model } from 'mongoose';

export interface Earthquake {
  location: string;
  magnitude: number;
  date: Date;
}

const earthquakeSchemaDefenition = {
  location: { type: String, required: true },
  magnitude: { type: Number, required: true },
  date: { type: Date, required: true },
};

const earthquakeSchema = new Schema<Earthquake>(earthquakeSchemaDefenition);

export const EarthquakeModel = model('Earthquake', earthquakeSchema);
