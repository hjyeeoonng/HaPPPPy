import React from 'react';
import styled from 'styled-components';
import theme from '../value/color';

const Root = styled.div`
  width: 375px;

  font-family: AppleSDGothicNeoM00;
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.5px;
`;

// 셀렉트 박스를 감싸는 컨테이너
const SelectContainer = styled.div`
  position: relative;
  display: inline-block;
  padding: 0 20px;
`;

// 실제 셀렉트 박스 스타일
const Select = styled.select`
  width: ${(props) => props.width};
  height: 54px;
  appearance: none;
  background-color:${theme.light_gray};
  border: 1px solid ${theme.light_gray};
  border-radius: 10px;
  padding: 10px 30px 10px 15px;
  font-size: 16px;
  color: ${theme.second_text};
  cursor: pointer;
  outline: none;
`;

// 삼각형 화살표 아이콘 스타일
const ArrowIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 35px;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 8px 5px 0 5px;
  border-color: ${theme.second_text} transparent transparent transparent;
`;



const CustomSelect = ({ value, onChange, options, width}) => {
  return (
    <Root>

      <SelectContainer>
        <Select value={value} onChange={onChange} width={width}>
          {options.map((option) => (
            <option key={option.value} value={option.value} >
              {option.label}
            </option>
          ))}
        </Select>
        <ArrowIcon />
      </SelectContainer>
    </Root>
  );
};

export default CustomSelect;
