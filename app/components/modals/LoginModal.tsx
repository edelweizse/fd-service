'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

import useLoginModal from '@/app/hooks/useLoginModal';
import useRegisterModal from '@/app/hooks/useRegisterModal';

import { signIn } from 'next-auth/react';
import Button from '../Button';
import Heading from '../Heading';
import Input from '../inputs/Input';
import Modal from './Modal';

const LoginModal = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    try {
      const callback = await signIn('credentials', {
        ...data,
        redirect: false,
      });

      setIsLoading(false);

      if (callback && callback.ok) {
        toast.success('Logged in');
        router.refresh();
        loginModal.onClose();
      }

      if (callback && callback.error) {
        toast.error('Something went wrong!');
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
      setIsLoading(false);
      toast.error('An error occurred during sign-in.');
    }
  };

  const onToggle = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal]);

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Heading title='Welcome back' subtitle='Login to your account!' />
      <Input
        id='email'
        label='Email'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id='password'
        label='Password'
        type='password'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className='flex flex-col gap-4 mt-3'>
      <hr />
      <Button
        outline
        label='Continue with Google'
        icon={FcGoogle}
        onClick={() => signIn('google')}
      />
      <Button
        outline
        label='Continue with Github'
        icon={AiFillGithub}
        onClick={() => signIn('github')}
      />
      <div
        className='
      text-neutral-500 text-center mt-4 font-light'
      >
        <p>
          First time using FD?
          <span
            onClick={onToggle}
            className='cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary font-normal'
          >
            {' '}
            Create an account
          </span>
        </p>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title='Login'
      actionLabel='Continue'
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
