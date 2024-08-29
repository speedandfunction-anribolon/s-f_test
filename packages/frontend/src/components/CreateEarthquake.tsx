import React, { useCallback, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import {
  GetEarthquakesDocument,
  MutationCreateEarthquakeArgs,
  useCreateEarthquakeMutation,
} from '../_generated';

const CreateEarthquake = () => {
  const [createEarthquake] = useCreateEarthquakeMutation();
  const [newEarthquake, setNewEarthquake] = useState<
    Partial<MutationCreateEarthquakeArgs>
  >({});

  const onCreateEarthquake = useCallback(
    ({ location, magnitude, date }: Partial<MutationCreateEarthquakeArgs>) => {
      if (location && magnitude && date) {
        createEarthquake({
          variables: { location, magnitude, date },
          refetchQueries: [{ query: GetEarthquakesDocument }],
        });
        setNewEarthquake({});
      }
    },
    [createEarthquake, setNewEarthquake]
  );

  const onNewEarthquakeChange = useCallback(
    (earthquakeChange: Partial<MutationCreateEarthquakeArgs>) => {
      setNewEarthquake({
        ...newEarthquake,
        ...earthquakeChange,
      });
    },
    [newEarthquake, setNewEarthquake]
  );

  return (
    <Box marginTop={'40px'}>
      <Typography variant="h5" gutterBottom>
        Add New Earthquake
      </Typography>
      <TextField
        label="Location"
        value={newEarthquake.location || ''}
        onChange={(e) => onNewEarthquakeChange({ location: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Magnitude"
        value={newEarthquake.magnitude || ''}
        onChange={(e) =>
          onNewEarthquakeChange({ magnitude: parseFloat(e.target.value) })
        }
        fullWidth
        margin="normal"
      />
      <TextField
        label="Date"
        type="datetime-local"
        value={newEarthquake.date || ''}
        onChange={(e) => onNewEarthquakeChange({ date: e.target.value })}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => onCreateEarthquake(newEarthquake)}
      >
        Add Earthquake
      </Button>
    </Box>
  );
};

export default CreateEarthquake;
