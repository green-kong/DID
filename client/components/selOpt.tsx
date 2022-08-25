import {
  Arrow,
  OptionWrap,
  SelectArrow,
  SelectWrap,
  StyledOption,
  StyledSelect,
} from '../styles/customSel';

interface IOptions {
  key: string;
  value: string;
}

interface SelOptProps {
  options: IOptions[];
  isOpend: boolean;
  openOrCloseSelect: () => void;
  // eslint-disable-next-line no-unused-vars
  setGenderState: (v: IOptions) => () => void;
  genderState: IOptions;
}

const SelOpt = ({
  options,
  isOpend,
  openOrCloseSelect,
  setGenderState,
  genderState,
}: SelOptProps) => {
  const opt = options.map((v, i) => {
    return (
      <StyledOption key={i} onClick={setGenderState(v)}>
        {v.key}
      </StyledOption>
    );
  });

  return (
    <SelectWrap>
      <StyledSelect onClick={openOrCloseSelect}>
        {genderState.key}
        <SelectArrow>
          <Arrow />
        </SelectArrow>
      </StyledSelect>
      <OptionWrap isOpend={isOpend}>{opt}</OptionWrap>
    </SelectWrap>
  );
};

export default SelOpt;
