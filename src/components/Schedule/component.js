import React, {useState, Fragment, Component} from 'react';
import { Link } from 'react-router-dom';

function ScheduleModal() {
  return (
      <div className="scheduleModal">
          <a href="">회사 선택</a>
        <select name="" id="">
            <option value="">ALL</option>
            <option value="">삼성전자</option>
            <option value="">lg화학</option>
            <option value="">sk이노베이션</option>
        </select>
        <a href="">회사 일정</a>
        <i>등록된 일정이 없습니다.</i>
      </div>
  );
}
export default ScheduleModal;