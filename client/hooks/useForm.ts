import { useState, useEffect } from 'react';
import FormData from 'form-data';
import Router from 'next/router';

import { IAppInfo } from '../types/appInfo';
import validation from '../utils/validation';
import addAppRequest from '../api/dev/addApp';
import updateApp from '../api/dev/updateApp';

interface IUseFormReturn {
  values: IAppInfo;
  errors: IAppInfo;
  handleChange: (
    // eslint-disable-next-line no-unused-vars
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  // eslint-disable-next-line no-unused-vars
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  // eslint-disable-next-line no-unused-vars
  reset: (defaultValue: IAppInfo) => void;
}

const useForm = (
  initialValues: IAppInfo,
  imgFile: File | undefined,
  type = 'addApp',
): IUseFormReturn => {
  const [values, setValues] = useState<IAppInfo>(initialValues);
  const [errors, setErrors] = useState<IAppInfo>({});
  const [submit, setSubmit] = useState<boolean>(false);

  const formData = new FormData();

  const reset = (defaultValues: IAppInfo) => {
    setValues(defaultValues);
  };

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
      formData.append('name', values.name);
      formData.append('desc', values.desc);
      formData.append('host', values.host);
      formData.append('redirect', values.redirectURI);

      let response;
      switch (type) {
        case 'addApp':
          response = await addAppRequest(formData);
          console.log(response);

          break;

        case 'updateApp':
          formData.append('idx', values.idx);
          response = await updateApp(formData);
          break;

        default:
          break;
      }

      if (response) {
        Router.push('/dev/appList');
      }
    })();
  }, [errors]);

  return { values, handleChange, handleSubmit, errors, reset };
};

export default useForm;
