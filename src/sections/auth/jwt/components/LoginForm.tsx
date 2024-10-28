import { Stack, FormControl, InputLabel, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { UseFormReturn } from 'react-hook-form';
import { BootstrapInput, BootstrapPasswordInput } from '../../../../components/hook-form/BootstrapInput';
import { LoginFormValues } from '../validation/loginValidation';

interface LoginFormProps {
  methods: UseFormReturn<LoginFormValues>;
  password: { value: boolean; setValue: (value: boolean) => void };
  isSubmitting: boolean;
}

export default function LoginForm({
  methods,
  password,
  isSubmitting,
}: LoginFormProps): JSX.Element {
  return (
    <Stack spacing={2.5}>
      <Typography variant="h3">Account Login</Typography>

      <Stack spacing={2.5}>
        <FormControl variant="standard" fullWidth>
          <InputLabel shrink htmlFor="bootstrap-input">
            Email address
          </InputLabel>
          <BootstrapInput id="bootstrap-input" {...methods.register('email')} />
        </FormControl>
        <FormControl variant="standard" fullWidth>
          <InputLabel shrink htmlFor="password-input">
            Password
          </InputLabel>
          <BootstrapPasswordInput
            id="password-input"
            {...methods.register('password')}
            type={password.value ? 'text' : 'password'}
          />
        </FormControl>
      </Stack>

      <LoadingButton
        fullWidth
        style={{
          backgroundColor: 'rgb(44, 123, 228)',
          color: 'white',
        }}
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
      >
        Login
      </LoadingButton>
    </Stack>
  );
}
