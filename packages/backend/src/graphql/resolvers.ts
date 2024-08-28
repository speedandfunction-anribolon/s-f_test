import { Types } from 'mongoose';
import { Earthquake, EarthquakeModel } from '../models/Earthquake';

type Id = {
  id: Types.ObjectId;
};

export const resolvers = {
  Query: {
    getEarthquakes: async () => EarthquakeModel.find(),
  },
  Mutation: {
    createEarthquake: async (
      _: unknown,
      { location, magnitude, date }: Earthquake
    ) => EarthquakeModel.create({ location, magnitude, date }),
    updateEarthquake: async (
      _: unknown,
      { id, location, magnitude, date }: Earthquake & Id
    ) =>
      EarthquakeModel.findByIdAndUpdate(
        id,
        { location, magnitude, date },
        { new: true }
      ),
    deleteEarthquake: async (_: unknown, { id }: Id) =>
      EarthquakeModel.findByIdAndDelete(id),
  },
};
