import React from 'react';
import {
  Paper,
  Step,
  Stepper,
  StepLabel,
  Box
} from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import SurveryForm from './SurveyForm';
import UserFormProfile from './UserFormProfile';

const steps = ['Detail Profile', 'Survey (Optional)'];

export default function StepperForm() {
  const initialStep = useSelector((state : RootState) => state.step_state)

  return (
    <Box sx={{ width: '100%' }}>
      <Paper elevation={2}>
          <Box p={3}>
          <Stepper activeStep={initialStep.step_state}>
              {steps.map((label, index) => {
              const stepProps: { completed?: boolean } = {};
              const labelProps: {
                  optional?: React.ReactNode;
              } = {};
              return (
                  <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>
                      <h3>{label}</h3>
                      </StepLabel>
                  </Step>
              );
              })}
          </Stepper>
          </Box>
      </Paper>


      <React.Fragment>
      { initialStep.step_state === 0 ? (
            <Paper elevation={2}>
              <Box p={3} mt={2}>
                  <Box>
                      <UserFormProfile
                          profile={false}
                      />
                  </Box>
              </Box>
            </Paper>
      ) :  (
            <Paper elevation={2}>
              <Box p={3} mt={2}>
                  <Box>
                      <SurveryForm/>
                  </Box>
              </Box>
            </Paper>
      ) }
      </React.Fragment>
    </Box>
  );
}
