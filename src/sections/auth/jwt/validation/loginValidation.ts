import * as Yup from 'yup';

export interface LoginFormValues {
  email: string;
  password: string;
}

export const LoginSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Email must be a valid email address'),
  password: Yup.string().required('Password is required'),
});

export const defaultValues: LoginFormValues = {
  email: '',
  password: '',
};
