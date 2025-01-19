import style from './Login.module.scss'

import { UI } from '../../ui'
import { Button, Form } from '../../components'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';

import { z } from 'zod'
import { useMutation } from '@tanstack/react-query';
import { validacaoUsuario } from '../../services/resquest';
import { useNavigate } from 'react-router-dom';

const schema = z.object({
  email: z.string()
    .min(3, 'Porfavor infome um e-mail valido')
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, ' Formato de e-mail invalido'),
  senha: z.string().min(3, 'Porfavor infome um senha valida')
})

type LoginProps = z.infer<typeof schema>

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginProps>({
    resolver: zodResolver(schema),
  })

  const { mutateAsync, error } = useMutation({
    mutationFn: validacaoUsuario,
    onSuccess: (data) => {
        localStorage.setItem('id', JSON.stringify(data.user.id));
        navigate('/home')
        return
    },
    onError: () => {
              
    }
  })
  console.log(error);
  
  const onSubmit = async (data: LoginProps) => {
    try {
      await mutateAsync(data);
    } catch (err) {
      console.error("Erro durante o envio:", err);
    }
  }
  return (
    <>
      <UI.Card>
      <form onSubmit={handleSubmit((data) => onSubmit(data))} className={style.form}>
        <h1>Entrar</h1>
        <Form.Input type='text' {...register('email')} label='E-mail' ErrorText={errors?.email?.message} />
        <Form.Input type='password'{...register('senha')} label='Senha' ErrorText={errors?.senha?.message} />
        <Button type='submit'>Acessar</Button>
      </form>
    </UI.Card>
    <span>{error?.message}</span>
    </>
    
  )
}

export default Login
