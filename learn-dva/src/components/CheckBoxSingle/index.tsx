import React, { useState } from 'react';
import classnames from 'classnames';
import { Popover, Checkbox, DatePicker } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import toDate, { timeRange } from 'util/date';
import style from './index.module.less';
const { RangePicker } = DatePicker;
interface IProps {
  className?: string;
}

const timeList = [
  {
    label: '今日',
    value: timeRange.today,
  },
  {
    label: '昨天',
    value: timeRange.yesterday,
  },
  {
    label: '最近七天',
    value: timeRange.recentWeek,
  },
  {
    label: '最近30日',
    value: timeRange.recentMonths,
  },
  {
    label: '最近90天',
    value: timeRange.recentQuarters,
  },
  {
    label: '最近365日',
    value: timeRange.recentYear,
  },
];

const ByTime: React.FC<IProps> = ({ className }) => {
  const [tempStatus, setTempStatus] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const singleChange = (e: any) => {
    const value = e.target.value;
    setTempStatus(() => (value === tempStatus ? undefined : value));
    setShowDatePicker(() => (value === 'custom' && value !== tempStatus ? true : false));
  };

  const content = (
    <Checkbox.Group className={style.popover} value={[tempStatus]}>
      {timeList.map((item) => (
        <p key={item.value}>
          <label>{item.label}</label>
          <Checkbox key={item.value} value={item.value} onChange={singleChange} />
        </p>
      ))}
      <p>
        <label> 自定义时间范围</label>
        <Checkbox key="custom" value="custom" onChange={singleChange} />
      </p>
      {showDatePicker ? <RangePicker /> : null}
    </Checkbox.Group>
  );

  const cls = classnames(className);
  return (
    <div className={style.byTime}>
      <Popover
        content={content}
        trigger="click"
        placement="bottomRight"
        getPopupContainer={(e) => e.parentNode as unknown as HTMLElement}
        // visible={this.state.visible}
        // onVisibleChange={this.handleVisibleChange}
      >
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          按时间 <DownOutlined />
        </a>
      </Popover>
    </div>
  );
};
export default ByTime;
