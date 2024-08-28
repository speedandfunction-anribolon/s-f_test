import { Schema, model, InferRawDocType } from 'mongoose';

const earthquakeSchemaDefenition = {
  location: { type: String, required: true },
  magnitude: { type: Number, required: true },
  date: { type: Date, required: true },
};

const earthquakeSchema = new Schema(earthquakeSchemaDefenition);

export type Earthquake = InferRawDocType<typeof earthquakeSchemaDefenition>;

export const EarthquakeModel = model('Earthquake', earthquakeSchema);
