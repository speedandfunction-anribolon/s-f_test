import React, { useMemo, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';

import { useGetEarthquakesQuery } from '../_generated';
import CreateEarthquake from '../components/CreateEarthquake';
import EarthquakeRow from '../components/EarthquakeRow';

const PER_PAGE = 20;

const EarthquakeList = () => {
  const { loading, error, data: earthquakes } = useGetEarthquakesQuery();
  const [page, setPage] = useState(0);

  const earthquakesToShow = useMemo(
    () =>
      (earthquakes?.getEarthquakes || []).slice(
        page * PER_PAGE,
        page * PER_PAGE + PER_PAGE
      ),
    [earthquakes, page]
  );

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error.message}</Typography>;
  if (!earthquakes?.getEarthquakes) return null;

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
            {earthquakesToShow.map((earthquake) => (
              <EarthquakeRow earthquake={earthquake} key={earthquake.id} />
            ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={earthquakes?.getEarthquakes?.length || 0}
          rowsPerPage={PER_PAGE}
          page={page}
          onPageChange={(_, pageNum) => setPage(pageNum)}
          rowsPerPageOptions={[]}
        />
      </TableContainer>

      <CreateEarthquake />
    </Container>
  );
};

export default EarthquakeList;
