import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px 5px;
`;


// 셀렉트 박스를 감싸는 컨테이너
const SelectContainer = styled.div`
  position: relative;
  display: inline-block;
  font-family: Arial, sans-serif;
`;

//셀렉트 박스의 질문
const SelectText = styled.div`
  width: 90%;
  margin-bottom: 50px;
  font-family: Ubuntu;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;

// 실제 셀렉트 박스 스타일
const Select = styled.select`
  width: 280px;
  appearance: none;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  border-radius: 20px;
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



const options = [
  { value: 'New York', label: 'New York' },
  { value: 'Ottawa', label: 'Ottawa' },
  { value: 'Berlin', label: 'Berlin' },
  { value: 'Milano', label: 'Milano' },
  { value: 'Tokyo', label: 'Tokyo' },
];

const CustomSelect = ({ value, onChange }) => {
  return (
    <Root>
      <SelectText>장소를 선택해주세요</SelectText>
      <SelectContainer>

        <Select value={value} onChange={onChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
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
