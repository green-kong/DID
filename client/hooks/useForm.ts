import { useState, useEffect } from 'react';
import FormData from 'form-data';

import { IAppInfo } from '../types/appInfo';
import validation from '../utils/validation';
import addAppRequest from '../api/dev/addApp';

interface IUseFormReturn {
  values: IAppInfo;
  errors: IAppInfo;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const useForm = (
  initialValues: IAppInfo,
  imgFile: File | undefined,
): IUseFormReturn => {
  const [values, setValues] = useState<IAppInfo>(initialValues);
  const [errors, setErrors] = useState<IAppInfo>({});
  const [submit, setSubmit] = useState<boolean>(false);

  const formData = new FormData();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setSubmit(true);
    e.preventDefault();
    setErrors(validation(values));
  };

  useEffect(() => {
    (async () => {
      if (!submit) return;

      if (Object.keys(errors).length) return;

      formData.append('file', imgFile);
      formData.append('data', values);

      await addAppRequest(formData);
    })();
  }, [errors]);

  return { values, handleChange, handleSubmit, errors };
};

export default useForm;
