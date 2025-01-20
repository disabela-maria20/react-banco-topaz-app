import style from './Transfer.module.scss';
import { UI } from '../../ui';
import { Button, Form, Profile, Notification } from '../../components';
import { NavLink } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { postTransfer } from '../../services/resquest';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useUser } from '../../hook/useUser';

const transferSchema = z
  .object({
    transferValue: z
      .string()
      .min(1, 'Insira um valor válido para a transferência.'),
    bank: z
      .string()
      .min(3, 'O código do banco deve ter 3 dígitos.'),
    agency: z
      .string()
      .min(4, 'A agência deve ter no mínimo 4 dígitos.')
      .regex(/^\d+$/, 'A agência deve conter apenas números.'),
    account: z
      .string()
      .min(6, 'A conta deve ter no mínimo 6 dígitos.')
      .regex(/^\d+$/, 'A conta deve conter apenas números.'),
    name: z
      .string()
      .min(2, 'O nome deve ter pelo menos 2 caracteres.')
      .regex(/^[a-zA-Z\s]+$/, 'O nome deve conter apenas letras.'),
    schedule: z
      .string()
      .optional()
      .refine((value) => !value || new Date(value) > new Date(), {
        message: 'A data de agendamento deve ser futura.',
      }),
  })
  .refine((data) => {
    if (data.schedule) return true;
    const isScheduling = document.getElementById('agendar') as HTMLInputElement;
    return !isScheduling?.checked;
  }, {
    path: ['schedule'],
    message: 'Por favor, insira a data para agendamento.',
  });

type TransferProps = z.infer<typeof transferSchema> & { id: number, isScheduling: boolean };

const Transferir = () => {
  const { user, setTransfer } = useUser();
  const [isScheduling, setIsScheduling] = useState(false);

  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toISOString().slice(0, 16);
  };

  const { register, handleSubmit, reset, formState: { errors } } = useForm<TransferProps>({
    resolver: zodResolver(transferSchema),
    defaultValues: {
      schedule: getCurrentDateTime(),
    },
  });

  const { mutateAsync, isError, error, isSuccess } = useMutation({
    mutationFn: (data: TransferProps) => postTransfer(data),
    onSuccess: (data) => {
      setTransfer(Number(data.transferValue));
      reset();
    },
  });

  const onSubmit = async (data: TransferProps) => {
    if (!user.id) return;
    await mutateAsync({ ...data, id: user.id, isScheduling });
  };

  return (
    <UI.Card>
      <section className={style.Transfer}>
        <div className={style.data}>
          <div className={style.profile}>
            <Profile.Photo />
            <div>
              <Profile.Name />
              <Profile.Balance />
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
          <Form.Input
            type="text"
            {...register('transferValue')}
            label="Valor da transferência"
            ErrorText={errors?.transferValue?.message}
          />
          <Form.Input
            type="text"
            {...register('bank')}
            label="Banco"
            ErrorText={errors?.bank?.message}
          />
          <div className={style.grid}>
            <Form.Input
              type="text"
              {...register('agency')}
              label="Agência"
              ErrorText={errors?.agency?.message}
            />
            <Form.Input
              type="text"
              {...register('account')}
              label="Conta"
              ErrorText={errors?.account?.message}
            />
          </div>
          <Form.Input
            type="text"
            {...register('name')}
            label="Nome"
            ErrorText={errors?.name?.message}
          />
          <div className={style.agendar}>
            <label htmlFor="agendar">
              <input
                type="checkbox"
                id="agendar"
                onChange={(e) => {
                  setIsScheduling(e.target.checked);
                  if (!e.target.checked) {
                    reset({ schedule: getCurrentDateTime() });
                  }
                }}
              />
              <h2>Agendar transferência</h2>
            </label>
          </div>
          {isScheduling && (
            <Form.Input
              {...register('schedule')}
              type="datetime-local"
              label="Data de Agendamento"
              ErrorText={errors?.schedule?.message}
            />
          )}
          <div className={style.flex}>
            <NavLink to={'/home'}>Voltar</NavLink>
            <Button type="submit">Enviar</Button>
          </div>
        </form>
      </section>
      {isSuccess && (
        <Notification color="green" title="Enviado" description="Transferência enviada com sucesso!" />
      )}
      {isError && error && (
        <Notification color="red" title="Erro" description={error.message || 'Erro ao enviar transferência.'} />
      )}
    </UI.Card>
  );
};

export default Transferir;
