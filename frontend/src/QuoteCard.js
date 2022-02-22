import './App.css';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


const QuoteCard = function({quote}) {
    return (
      <Card sx={{ minWidth: 275, maxWidth: 375, margin: 'auto', marginTop: 5 }}>
        <CardContent>  
          {quote}
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
    );
  }

export default QuoteCard;