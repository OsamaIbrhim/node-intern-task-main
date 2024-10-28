import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, UseFormReturn } from 'react-hook-form';
import { useRouter, useSearchParams } from 'src/routes/hooks';
import { useAuthContext } from 'src/auth/hooks';
import { PATH_AFTER_LOGIN } from 'src/config-global';

import { useBoolean } from 'src/hooks/use-boolean';
import FormProvider from 'src/components/hook-form';
import { LoginSchema, defaultValues, LoginFormValues } from './validation/loginValidation';
import Terms from './components/Terms';
import LoginForm from './components/LoginForm';

export default function JwtLoginView(): JSX.Element {
  const { login } = useAuthContext();
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState<string>('');
  const searchParams = useSearchParams();
  const returnTo = searchParams.get('returnTo');
  const password = useBoolean();

  const methods = useForm<LoginFormValues>({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data: LoginFormValues) => {
    try {
      await login?.(data.email, data.password);
      router.push(returnTo || PATH_AFTER_LOGIN);
    } catch (error) {
      console.error(error);
      reset();
      setErrorMsg(typeof error === 'string' ? error : (error as Error).message);
    }
  });

  return (
    <>
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <LoginForm methods={methods} password={password} isSubmitting={isSubmitting} />
      </FormProvider>
      <Terms />
    </>
  );
}
