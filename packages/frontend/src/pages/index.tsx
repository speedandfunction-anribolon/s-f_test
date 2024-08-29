import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
// import SaveIcon from '@mui/icons-material/Save';

import { useGetEarthquakesQuery } from '../_generated';

const EarthquakeList = () => {
  const { loading, error, data: earthquakes } = useGetEarthquakesQuery();

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error.message}</Typography>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Earthquake List
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Location</TableCell>
              <TableCell align="right">Magnitude</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {earthquakes?.getEarthquakes?.map(
              ({ id, location, magnitude, date }) => (
                <TableRow key={id}>
                  <TableCell component="th" scope="row">
                    {location}
                  </TableCell>
                  <TableCell align="right">{magnitude}</TableCell>
                  <TableCell align="right">
                    {new Date(parseInt(date)).toLocaleString()}
                  </TableCell>
                  <TableCell align="right">
                    <Button>
                      <DeleteIcon />
                    </Button>
                    <Button>
                      <EditIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default EarthquakeList;
