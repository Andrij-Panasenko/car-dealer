import styled from 'styled-components';

export const Form = styled.form`
  box-shadow: 0 8px 0 0 rgba(25, 36, 89, 0.28);
  border-radius: 8px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const SelectGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 35px;
  row-gap: 30px;

  width: 100%;
  max-width: 730px;
  padding: 18px 30px 30px;

  background-color: ${(p) => p.theme.colors.grey};
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 14px;
  line-height: 143%;

  width: 200px;

  display: flex;
  flex-direction: column;
  gap: 6px;

  color: ${(p) => p.theme.colors.subtitle};
`;

export const InputsGroup = styled.div`
  padding: 18px 30px 26px;

  background-color: #f5f5f5;
`;

export const InputSelect = styled.select`
  padding: 12px 13px;
  border: none;
  border-radius: 5px;
  width: 200px;
  height: 45px;

  font-weight: 700;
  font-size: 16px;
  line-height: 125%;

  background-color: ${(p) => p.theme.colors.white};
`;

export const Pricing = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  margin-bottom: 14px;

  color: ${(p) => p.theme.colors.text};
`;

export const InputText = styled.input`
  padding: 12px 13px;
  border: none;
  border-radius: 5px;
  outline: none;

  font-weight: 700;
  font-size: 16px;
  line-height: 125%;

  background-color: ${(p) => p.theme.colors.white};
`;

export const InputsWrapp = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 31px;
`;

export const SubmitBtn = styled.button`
  display: block;
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  min-width: 179px;
  margin: 0 auto;

  outline: none;
  border: none;

  border-radius: 5px;
  padding: 12px 47px;

  color: ${(p) => p.theme.colors.blue};
  background-color: ${(p) => p.theme.colors.yellow};

  transition: background-color ${(p) => p.theme.transition};

  &:hover,
  :focus {
    background-color: #f0a500;
  }
`;
