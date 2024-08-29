import React, { useState } from 'react';
import {
  Earthquake,
  GetEarthquakesDocument,
  useDeleteEarthquakeMutation,
} from '../_generated';
import Button from '@mui/material/Button';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EditEarthquake from './EditEarthquake';

interface EarthquakeRowProps {
  earthquake: Earthquake;
}

const EarthquakeRow = ({ earthquake }: EarthquakeRowProps) => {
  const { id, location, date, magnitude } = earthquake;
  const [isEdit, setIsEdit] = useState(false);
  const [deleteEarthquake] = useDeleteEarthquakeMutation();
  const onDeleteEarthquake = (id: string) =>
    deleteEarthquake({
      variables: { id },
      refetchQueries: [{ query: GetEarthquakesDocument }],
    });

  if (isEdit) {
    return (
      <EditEarthquake
        key={id}
        earthquake={earthquake}
        onDone={() => setIsEdit(false)}
      />
    );
  }

  return (
    <>
      <TableRow key={id}>
        <TableCell component="th" scope="row">
          {location}
        </TableCell>
        <TableCell align="right">{magnitude}</TableCell>
        <TableCell align="right">
          {new Date(parseInt(date)).toLocaleString()}
        </TableCell>
        <TableCell align="right">
          <Button onClick={() => onDeleteEarthquake(id)}>
            <DeleteIcon />
          </Button>
          <Button onClick={() => setIsEdit(true)}>
            <EditIcon />
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default EarthquakeRow;
