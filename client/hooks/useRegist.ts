/* eslint-disable camelcase */
import Router from 'next/router';
import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import Https from '../api/index';

interface IValues {
  userId?: string;
  userPw?: string;
  pwCheck?: string;
  userName?: string;
  birth?: string;
  email?: string;
  selectMail?: string;
  email_code?: string;
}

const initialState = {
  userId: '',
  userPw: '',
  pwCheck: '',
  userName: '',
  birth: '',
  email: '',
  selectMail: '@gmail.com',
  email_code: '',
};

const useRegist = (
  gender: string,
  authNum: string,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
) => {
  const [values, setValues] = useState<IValues>(initialState);
  const [errors, setErrors] = useState<IValues>({});
  const [submits, setSubmits] = useState<boolean>(false);

  const setValue = (e: any) => {
    const { value, name } = e.target;
    const newValues = { ...values, [name]: value };
    setValues(newValues);
  };

  const validation = async (values: IValues): Promise<IValues> => {
    const error: IValues = {};

    const { userId, userPw, pwCheck, userName, birth, email, email_code } =
      values;

    // userId
    if (!userId) {
      error.userId = '아이디를 입력해주세요';
    } else if (userId.match(/^[A-Za-z|0-9|]{4,12}$/gi) === null) {
      error.userId = '알파벳과 숫자로 이루어진 4~12자만 가능합니다. ';
    } else {
      try {
        const response = await Https.post('/user/idOverlap_Check', {
          inputId: userId,
        });
        if (!response.data.idCheck) {
          error.userId = '사용 불가능한 id 입니다.';
        }
      } catch (e) {
        console.log(e);
        console.log('아이디 중복체크 에러');
        error.userId = '잠시후에 다시 시도 해주세요.';
      }
    }

    // password
    if (!userPw || !pwCheck) error.pwCheck = '비밀번호를 입력해주세요.';
    if (userPw !== pwCheck) error.pwCheck = '비번이랑 비번확인이 달라요';
    if (
      userPw?.match(/^[A-Za-z|0-9|~!@#$%^&*]{4,16}$/gi)?.length === undefined
    ) {
      error.pwCheck =
        '4~16자, 알파벳, 숫자, 특수문자(~,!,@,#,$,%,^,&,*)만 사용가능합니다.';
    }

    // email
    if (email?.length === 0) error.email = '이메일을 입력해주세요.';

    if (authNum !== email_code) {
      error.email_code = '인증코드가 틀려요.';
    }

    // name
    if (userName?.match(/^[가-힣]{2,40}$/gi)?.length === undefined) {
      error.userName = '2글자이상 한글로만 작성해주세요.';
    }

    // birth
    if (birth?.length === 0) {
      error.birth = '생년월일을 입력하세요.';
    }

    if (birth?.match(/^[0-9]{6}/) === null) {
      error.birth = '6자리 숫자로 입력해주세요.';
    }

    if (
      birth?.match(
        /^([0-9]{2})(0[0-9]|1[0-2])(0[0-9]|1[0-9]|2[0-9]|3[0-1])/g,
      ) === null
    ) {
      error.birth = '생년월일이 올바르지 않습니다.';
    }

    const month = birth?.substring(2, 4);

    if (month === '02') {
      if (birth?.match(/^([0-9]{2})(02)(0[0-9]|1[0-9]|2[0-9])/g) === null) {
        error.birth = '생년월일이 올바르지 않습니다.';
      }
    }
    if (month === '04' || month === '06' || month === '09' || month === '11') {
      if (
        birth?.match(/^([0-9]{2})(04|06|09|11)(0[0-9]|1[0-9]|2[0-9]|30)/g) ===
        null
      ) {
        error.birth = '생년월일이 올바르지 않습니다.';
      }
    }
    if (
      month === '01' ||
      month === '03' ||
      month === '05' ||
      month === '07' ||
      month === '08' ||
      month === '10' ||
      month === '12'
    ) {
      if (
        birth?.match(
          /^([0-9]{2})(01|03|05|07|08|10|12)(0[0-9]|1[0-9]|2[0-9]|3[0-1])/g,
        ) === null
      ) {
        error.birth = '생년월일이 올바르지 않습니다.';
      }
    }
    if (values.email_code?.length === 0) {
      error.email_code = '코드를 입력해주세요.';
    }

    // setErrors({ ...errors, email_code: '인증코드를 입력해주세요.' });

    return error;
  };

  const setSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmits(true);
    setErrors(await validation(values));
  };

  useEffect(() => {
    if (!submits) return;
    if (Object.keys(errors).length) return;

    const submitHandler = async () => {
      setIsLoading(true);
      try {
        const response = await Https.post('/user/regist', {
          ...values,
          gender,
        });
        if (response.data.regist) {
          alert('회원가입 완료');
          Router.push('/user/login');
        } else {
          alert('회원가입 실패함');
        }
      } catch (e) {
        console.log(e);
        console.log('유저정보 안들어가짐');
      }
      setIsLoading(false);
    };
    submitHandler();
  }, [errors]);

  return { values, setValue, setSubmit, errors, setErrors };
};

export default useRegist;
