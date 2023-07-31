import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// 셀렉트 박스를 감싸는 컨테이너
const SelectContainer = styled.div`
  position: relative;
  display: inline-block;
`;

// 실제 셀렉트 박스 스타일
const Select = styled.select`
  width: ${(props) => props.width};
  height: 40px;
  appearance: none;
  background-color: #f6f6f6;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px 30px 10px 15px;
  font-size: 16px;
  color: #333;
  cursor: pointer;
  outline: none;
`;

// 삼각형 화살표 아이콘 스타일
const ArrowIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 8px 5px 0 5px;
  border-color: #555 transparent transparent transparent;
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
