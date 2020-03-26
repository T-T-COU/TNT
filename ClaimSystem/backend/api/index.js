import config from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './server/routes/UserRoutes';
import houseRoutes from './server/routes/HouseRoutes';
import residenceRoutes from './server/routes/ResidenceRoutes';
import claimRoutes from './server/routes/ClaimRoutes';
const cors = require('cors')

config.config();

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 8000;

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/houses', houseRoutes);
app.use('/api/v1/residences', residenceRoutes);
app.use('/api/v1/claims', claimRoutes);

// when a random route is inputed
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to this API. Request not recognized.',
}));

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

export default app;