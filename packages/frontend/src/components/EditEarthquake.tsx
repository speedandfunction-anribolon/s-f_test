import React, { useCallback, useState } from 'react';
import {
  Earthquake,
  GetEarthquakesDocument,
  useUpdateEarthquakeMutation,
} from '../_generated';
import Button from '@mui/material/Button';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

const formatDateToISO = (date: Date | string | number) => {
  const dateObj =
    date instanceof Date
      ? date
      : typeof date === 'number' || date.includes('-')
      ? new Date(date)
      : new Date(parseInt(date));

  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const day = String(dateObj.getDate()).padStart(2, '0');
  const hours = String(dateObj.getHours()).padStart(2, '0');
  const minutes = String(dateObj.getMinutes()).padStart(2, '0');
  console.log(`${year}-${month}-${day}T${hours}:${minutes}`);
  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

interface EarthquakeRowProps {
  earthquake: Earthquake;
  onDone: () => void;
}

const EditEarthquake = ({ earthquake, onDone }: EarthquakeRowProps) => {
  const [updateEarthquake] = useUpdateEarthquakeMutation();
  const [editedEarthquake, setEditedEarthquake] =
    useState<Earthquake>(earthquake);

  const onUpdateEarthquake = useCallback(() => {
    if (
      editedEarthquake.location &&
      editedEarthquake.magnitude &&
      editedEarthquake.date
    ) {
      updateEarthquake({
        variables: editedEarthquake,
        refetchQueries: [{ query: GetEarthquakesDocument }],
      });
      onDone();
    }
  }, [updateEarthquake, editedEarthquake]);

  const onEarthquakeChange = useCallback(
    (earthquakeChange: Partial<Earthquake>) => {
      setEditedEarthquake({
        ...editedEarthquake,
        ...earthquakeChange,
      });
    },
    [editedEarthquake, setEditedEarthquake]
  );

  return (
    <>
      <TableRow key={editedEarthquake.id}>
        <TableCell component="th" scope="row">
          <TextField
            label="Location"
            value={editedEarthquake.location || ''}
            onChange={(e) => onEarthquakeChange({ location: e.target.value })}
            fullWidth
            margin="normal"
          />
        </TableCell>
        <TableCell align="right">
          <TextField
            label="Magnitude"
            value={editedEarthquake.magnitude || ''}
            onChange={(e) =>
              onEarthquakeChange({ magnitude: parseFloat(e.target.value) })
            }
            fullWidth
            margin="normal"
          />
        </TableCell>
        <TableCell align="right">
          <TextField
            label="Date"
            type="datetime-local"
            value={formatDateToISO(editedEarthquake.date)}
            onChange={(e) => onEarthquakeChange({ date: e.target.value })}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </TableCell>
        <TableCell align="right">
          <Button onClick={onUpdateEarthquake}>
            <SaveIcon />
          </Button>
          <Button onClick={onDone}>
            <CancelIcon />
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default EditEarthquake;
