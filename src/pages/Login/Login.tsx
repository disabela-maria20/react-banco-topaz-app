import style from './Login.module.scss'

import { UI } from '../../ui'
import { Button, Form, Notification } from '../../components'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';

import { z } from 'zod'
import { useMutation } from '@tanstack/react-query';
import { authenticateUser } from '../../services/resquest';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hook/useAuth';
import { useEffect, useState } from 'react';

const schema = z.object({
  email: z.string()
    .min(3, 'Por favor, informe um e-mail válido')
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Formato de e-mail inválido'),
  senha: z.string().min(3, 'Por favor, informe uma senha válida')
})

type LoginProps = z.infer<typeof schema>

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage(null);
      }, 5000);

      return () => clearTimeout(timer); 
    }
  }, [errorMessage]);
  
  const { register, handleSubmit, formState: { errors } } = useForm<LoginProps>({
    resolver: zodResolver(schema),
  })

  const { mutateAsync, error } = useMutation({
    mutationFn: authenticateUser,
    onSuccess: (data) => {
      if (data?.user?.id) login(data.user.id);
      navigate('/home')
    },
    onError: (error) => {
      setErrorMessage(error?.message || 'Erro desconhecido');
    }
  })

  const onSubmit = async (data: LoginProps) => {
    await mutateAsync(data);
  }

  return (
    <>
      <UI.Card>
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
          <h1>Entrar</h1>
          <Form.Input
            type="text"
            {...register('email')}
            label="E-mail"
            ErrorText={errors?.email?.message}
          />
          <Form.Input
            type="password"
            {...register('senha')}
            label="Senha"
            ErrorText={errors?.senha?.message}
          />
          <Button type="submit">Acessar</Button>
        </form>
      </UI.Card>

      {errorMessage && <Notification title='Erro' description={errorMessage} color='red' />}
    </>
  )
}

export default Login;
