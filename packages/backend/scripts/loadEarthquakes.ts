import mongoose, { Schema } from 'mongoose';
import { EarthquakeModel, Earthquake } from '../src/models/Earthquake';
import * as fs from 'fs';

const parseCSV = (csvString: string): Earthquake[] => {
  const csvRows = csvString.split(/\r?\n/);
  const csvHeaders = Object.fromEntries(
    csvRows[0].split(',').map((header, position) => [header, position])
  );
  const earthquakes: Earthquake[] = [];

  for (let row = 1; row < csvRows.length; ++row) {
    const record = csvRows[row].split(',');
    const location = `${record[csvHeaders?.Latitude]} ${
      record[csvHeaders?.Longitude]
    }`;
    const magnitude = parseFloat(record[csvHeaders?.Magnitude]);
    const date = new Date(record[csvHeaders?.DateTime]);

    if (location && magnitude != null && !isNaN(date.getTime())) {
      earthquakes.push({
        location: `${record[csvHeaders?.Latitude]} ${
          record[csvHeaders?.Longitude]
        }`,
        magnitude,
        date,
      });
    } else {
      console.error('The row was skipped: ', record);
    }
  }

  return earthquakes;
};

const loadEarthquakes = async () => {
  await mongoose.connect('mongodb://localhost:27017/earthquake');

  if (!process.argv[2]) {
    console.error('Path to file is expected as argument');
    process.exit(0);
  }

  fs.readFile(process.argv[2], 'utf8', async (err, data) => {
    if (err) {
      console.error(err);
      process.exit(0);
    }
    const earthquakes = parseCSV(data);

    await EarthquakeModel.insertMany(earthquakes);

    console.log('Earthquakes data loaded successfully.');
    process.exit(0);
  });
};

loadEarthquakes();
